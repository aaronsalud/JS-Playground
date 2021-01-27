const { MODERATION_MODEL } = require('clarifai');
//Setup Redis
const redis = require('redis');
module.exports = redis.createClient(process.env.REDIS_URI);