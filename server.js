// const express = require("express");
const app = require("./app");
const mongoose = require("mongoose");
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/practise")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    `error occured ${err}`;
  });

app.listen(PORT, () => {
  console.log("Server started successfully");
});
