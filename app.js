const express = require("express");

const morgan = require("morgan");

const app = express();
const user = require("./Routes/userRoutes");
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/user", user);

// data = JSON.parse(data);

module.exports = app;
