import passwordSchema from "../models/password.model.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
function getuserschema(userID) {
  return mongoose.model(`passwords_${userID}`, passwordSchema);
}
const addpassword = async (req, res) => {
  try {
    let { website, username, password, token } = req.body;
    let check = await jwt.verify(token, process.env.KEY);
    let UserModel = await getuserschema(check.username);
    await UserModel.create({ website, username, password });
    console.log("password added successfully");
    res.status(200).send("true");
  } catch (error) {
    res.status(200).send("false");
  }
};
const getAllpassword = async (req, res) => {
  try {
    console.log("getAllpassword route started");
    let { token } = req.query;
    let check = await jwt.verify(token, process.env.KEY);
    let UserModel = await getuserschema(check.username);
    let passwordobj = await UserModel.find({});
    res.status(200).json({ status: true, userpasswords: passwordobj });
  } catch (error) {
    res.status(200).json({ status: false, message: "error getting password" });
  }
};
const getSinglepassword = async (req, res) => {
  try {
    let { passwordID, token } = req.query;
    let check = await jwt.verify(token, process.env.KEY);
    let UserModel = await getuserschema(check.username);
    let passwordobj = await UserModel.findOne({ website: passwordID });
    res.status(200).json({ status: "true", userpassword: passwordobj });
  } catch (error) {
    res
      .status(200)
      .json({ status: "false", message: "error getting password" });
  }
};
const updatepassword = async (req, res) => {
  const { username, website, password, token } = req.body;
  try {
    let check = await jwt.verify(token, process.env.KEY);
    let UserModel = await getuserschema(check.username);
    await UserModel.updateOne(
      { website },
      { $set: { username, password } },
      { runValidators: true }
    );
    res.status(200).send("true");
  } catch (error) {
    res.status(200).send("false");
  }
};
const deletepassword = async (req, res) => {
  try {
    let { passwordID, token } = req.query;
    console.log(passwordID);
    let check = await jwt.verify(token, process.env.KEY);
    let UserModel = await getuserschema(check.username);
    await UserModel.deleteOne({ website: passwordID });
    res
      .status(200)
      .json({ status: "true", message: "password deleted successfully" });
  } catch (error) {
    res
      .status(200)
      .json({ status: "false", message: "error in deleting password" });
  }
};
export {
  addpassword,
  getAllpassword,
  getSinglepassword,
  deletepassword,
  updatepassword,
};
