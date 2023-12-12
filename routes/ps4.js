// routes/ps4.js
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const nodeFetch = require('node-fetch');

// Configuration file (config.js - not pushed to GitHub)
const config = require('../config');

router.get('/', (req, res) => {
  res.render('form');
});

// Route using Promises
router.post('/route1', (req, res) => {
  // Implement data fetching logic using Promises
  // ...

  // Render the template with the fetched data
  res.render('template', { data });
});

// Route using async/await
router.post('/route2', async (req, res) => {
  // Implement data fetching logic using async/await
  // ...

  // Render the template with the fetched data
  res.render('template', { data });
});

// Route using callback
router.post('/route3', (req, res) => {
  // Implement data fetching logic using callback
  // ...

  // Render the template with the fetched data
  res.render('template', { data });
});

module.exports = router;
