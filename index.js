const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup.html')));

app.get('/another', (req, res) => res.json({ route: req.originalUrl }));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
