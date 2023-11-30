const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
}

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;