const express = require("express");
const path = require('path');
// const serverless = require('serverless-http');
const app = express();
// const bodyParser = require('body-parser');

// const router = express.Router();
// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>what are you doing here</h1>');
//   res.end();
// });

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'signup.html')));

app.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
