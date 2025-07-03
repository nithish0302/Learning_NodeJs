const express = require("express");

const morgan = require("morgan");

const app = express();
const fruitsRoute = require("./Routes");
app.use(express.json());
app.use(morgan("dev"));

app.use("/", fruitsRoute);

// data = JSON.parse(data);

module.exports = app;
