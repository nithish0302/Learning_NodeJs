const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ rollno: "717822F136", name: "Nithish" });
});

const port = 8000;

app.listen(port, () => {
  console.log("The server has been started");
});
