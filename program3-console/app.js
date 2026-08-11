const express = require("express");

const app = express();

app.get("/", (req, res) => {

    console.log("Hello World");

    res.send("Check terminal for Hello World.");
});

app.listen(3000, () => {
    console.log("Server Running");
});
