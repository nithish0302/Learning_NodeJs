// const mongoose = require("mongoose");

const User = require("../Models/userSchema");

const createUser = async (req, res) => {
  try {
    const { name, age, message, password, email } = req.body;

    if (!name || !message) {
      return res
        .status(400)
        .json({ status: "Fail", message: "All the field are important" });
    }
    const user = await User.create({
      name,
      age,
      message,
      password,
      email,
    });
    // await user.save();
    res
      .status(201)
      .json({ status: "success", data: user, message: "User Created" });
  } catch (err) {
    res
      .status(400)
      .json({ status: "Fail", message: `Failed to create Account ${err}` });
  }
};

const getuser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: `The internal error has been ocuurd ${err}`,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ status: "Fail", message: "User not found" });
    }
    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    res
      .status(400)
      .json({ status: "Fial", message: `The is internal error ${err}` });
  }
};
const customfind = async (req, res) => {
  try {
    const name = req.params.name;
    const user = await User.find({ name: name });
    if (!user || user.length == 0) {
      return res
        .status(400)
        .json({ status: "Fail", message: "No User  found" });
    }
    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    res
      .status(400)
      .json({ status: "Fial", message: `The is internal error ${err}` });
  }
};
module.exports = { createUser, getuser, getUserById, customfind };
