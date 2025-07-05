const express = require("express");

const router = express.Router();
const usercontroller = require("../Controller/userController");

router.get("/getalluser", usercontroller.getuser);
router.get("/getuser/:id", usercontroller.getUserById);
router.get("/getuserbyname/:name", usercontroller.customfind);
router.post("/createuser", usercontroller.createUser);

module.exports = router;
