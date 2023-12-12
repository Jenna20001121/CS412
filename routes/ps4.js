// routes/ps4.js
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const redis = require('redis');

// Create a Redis client
const redisClient = redis.createClient();

// Your configuration file (config.js)
const config = require('../config');

router.post('/route1', async (req, res) => {
  const searchQuery = req.body.search;

  // Check the cache first
  redisClient.get(searchQuery, async (err, cachedData) => {
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      res.json({ data: parsedData, source: 'cache' });
    } else {
      // Call the third-party API
      const apiResponse = await request({
        uri: `${config.apiUrl}/some/endpoint?search=${searchQuery}`,
        json: true,
      });

      // Cache the response with a 15-second timeout
      redisClient.setex(searchQuery, 15, JSON.stringify(apiResponse));

      res.json({ data: apiResponse, source: 'api' });
    }
  });
});

module.exports = router;

router.post('/route1', async (req, res) => {
  const searchQuery = req.body.search;

  // Check the cache first
  redisClient.get(searchQuery, async (err, cachedData) => {
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      res.json({ data: parsedData, source: 'cache' });
    } else {
      // Call the third-party API
      const apiResponse = await request({
        uri: `${config.apiUrl}/some/endpoint?search=${searchQuery}`,
        json: true,
      });

      // Cache the response with a 15-second timeout
      redisClient.setex(searchQuery, 15, JSON.stringify(apiResponse));

      res.json({ data: apiResponse, source: 'api' });
    }
  });
});

// ... (remaining code)
