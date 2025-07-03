const express = require("express");
// const app = require("./app");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  res.header({
    "Content-Type": "application/json",
    "my-header": "Hi",
  });
  res.status(200).json({ message: "The script is viewing form the server" });
});

router.get("/getfruits_data", (req, res) => {
  try {
    const fileloc = path.join(__dirname, "fruits_data.json");

    const data = JSON.parse(fs.readFileSync(fileloc, "utf-8"));

    res.header({
      "Content-Type": "application/json",
    });

    res.status(200).json({ data });
  } catch (error) {
    console.log(`Something went wrong ${error}`);
    res.status(500).json({ error: "Some thing went wrong" });
  }
});
router.post("/createAccount", (req, res) => {
  const { name, age, message } = req.body;

  if (!name || !age || !message) {
    {
      res.status(400).json("Name,Age,Message field are important");
    }
  }
  res.status(201).json({ message: "Account created" });
});

module.exports = router;
