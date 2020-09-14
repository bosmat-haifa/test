'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>what are you doing here</h1>');
  res.end();
});

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

router.get('/signup', (req, res) => res.sendFile(path.join(__dirname, "../signupdark.html")));


app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);