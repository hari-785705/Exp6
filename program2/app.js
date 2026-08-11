const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Us</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1>");
});

app.get("/services", (req, res) => {
    res.send("<h1>Our Services</h1>");
});

app.listen(3000, () => {
    console.log("Server Started");
});
