const mongoose = require("mongoose");

const scehma = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  age: { type: Number },
});

module.exports = mongoose.model("user", scehma);
