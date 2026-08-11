const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "GitHub Actions CI/CD Pipeline is working",
        status: "healthy"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

module.exports = app;