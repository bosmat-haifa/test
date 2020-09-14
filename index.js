const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'pages/signup.html')));

app.use((req, res,next)=>{
    res.status(404).send('<h1> Page not found </h1>');
 });


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
