const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'pages/signupbeta.html')));
app.get('/7th-grade', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup/7th-grade.html')));
app.get('/10th-grade', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup/10th-grade.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'logandreg/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'logandreg/register.html')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "pages/404.html"));
 });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
