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

  try {
    const imageAnalysisResults = await app.models.predict(Clarifai.FACE_DETECT_MODEL, url);
    const entries = await updateUserImageEntries(userId, url, db);

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

const updateUserImageEntries = async (id, url, db) => {
  try {
    await db('images').insert({ url, user_id: id });
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