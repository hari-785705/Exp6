const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Express.js Server is Running Successfully!");
});

app.get("/about", (req, res) => {
    res.send("Welcome to Express.js Lab");
});

app.get("/api", (req, res) => {
    res.json({
        message: "Express API is working",
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
