const express = require("express");
const app = express();
const path = require('path');
const http = require("http");



app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'pages/signupbeta.html')));
app.get('/7th-grade', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup/7th-grade.html')));
app.get('/7th-grade-en', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup/7th-grade.en.html')));
app.get('/test', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup/7th-grade.enbeta.html')));
app.get('/7th-grade-ru', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup/7th-grade.ru.html')));
app.get('/10th-grade', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup/10th-grade.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'logandreg/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'logandreg/register.html')));
app.get('/where', (req, res) => res.sendFile(path.join(__dirname, 'pages/moovit.html')));
app.get('/pam', (req, res) => res.sendFile(path.join(__dirname, 'pages/projectsandmegamot.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'pages/contact.html')));
app.get('/sitemap.xml', (req, res) => res.sendFile(path.join(__dirname, 'sitemap.xml')));
app.get('/arc-sw.js', (req, res) => res.sendFile(path.join(__dirname, 'arc-sw.js')));
app.get('/.well-known/brave-rewards-verification.txt', (req, res) => res.sendFile(path.join(__dirname, '.well-known/brave-rewards-verification.txt')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "pages/404.html"));
 });

const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
http.createServer(app).listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
});