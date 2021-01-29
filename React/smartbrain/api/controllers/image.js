const Clarifai = require('clarifai');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//You must add your own API key here from Clarifai. 
const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

const handleImageRecognitionAnalysis = async (req, res, db) => {
  const { authorization } = req.headers;
  const userId = jwt.decode(authorization).sub;

  const { url } = req.body;

  const userAlreadyPostedImage = await db('images').first().join('users_images', 'images.id', '=', 'users_images.image_id')
    .join('users', 'users.id', '=', 'users_images.user_id').where('url', '=', url).returning(['entries', 'anaylsis_results']);

  if (!userAlreadyPostedImage) {
    try {
      const imageAnalysisResults = await app.models.predict(Clarifai.FACE_DETECT_MODEL, url);
      const entries = await updateUserImageEntries(userId, url, imageAnalysisResults, db);

      if (entries.error) {
        return res.status(400).json(entries);
      }

      const responseData = { entries, image_analysis_results: imageAnalysisResults };
      return res.json(responseData);
    }
    catch (e) {
      return res.status(400).json({ error: 'Failed to analyze image' });
    }
  }

  return res.json({ entries: userAlreadyPostedImage.entries, image_analysis_results: userAlreadyPostedImage.analysis_results });
}

const updateUserImageEntries = async (id, url, analysis_results, db) => {
  try {
    const imageIds = await db('images').insert({ url, analysis_results }).returning('id');
    await db('users_images').insert({ user_id: id, image_id: imageIds[0] });
    const entries = await db('users').where('id', '=', id).increment('entries', 1).returning('entries');
    return entries[0];
  }
  catch (e) {
    return Promise.resolve({ error: "Failed to update user entries" });
  }
}

const getUserImages = async (req, res, db) => {
  const { authorization } = req.headers;
  const userId = jwt.decode(authorization).sub;
  try {
    const images = await db.select('*').from('images').where({ user_id: userId });
    res.json(images);
  }
  catch (e) {
    res.status(404).json({ error: "No images found for this user" });
  }
};

module.exports = {
  handleImageRecognitionAnalysis,
  getUserImages
}