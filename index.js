const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.static("./public"));


const router = express.Router
router.get("/home", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.use(`/.netlify/functions/api`, router);

module.exports.handler = serverless(app);