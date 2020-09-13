const express = require("express");
const app = express();

app.use(express.static("./public"));
app.get("/home", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Running on port ${PORT}...`));