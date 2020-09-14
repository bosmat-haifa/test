const express = require("express");
const app = express();
const path = require('path');
const fs = require("fs");
const haml = require("hamljs");

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup.html')));

app.use((req, res,next)=>{
    var hamlView = fs.readFileSync('pages/404.haml', 'utf8');
    res.send(haml.render(hamlView));
 });


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
