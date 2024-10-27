import { sender } from "../email/emailSender.js";
import user from "../models/user.model.js";
import bcrypt from "bcrypt";
const signup = async (req, res) => {
  try {
    const { name, username, password, email, gender } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // creating token valid for 1 hour
    let a = Date.now() + 3600000;
    // creating a otp for the user email verification
    let token = Math.floor(1000 + Math.random() * 9000);
    const obj = {
      name,
      username,
      password: hashedPassword,
      email,
      gender,
      verifyToken: token,
      verifyTokenExpiry: a,
    };
    let data = await user.create(obj);
    let resp = await sender(email, token);
    if (resp) {
      res.status(200).json({
        stat: "0",
        message: "user created successfully",
        databaseid: data._id,
        tokenexp: data.verifyTokenExpiry,
      });
    } else {
      // email error
      res.status(200).json({
        stat: "1",
        message: "error in sending token",
      });
    }
  } catch (error) {
    console.log(error);
    // server error
    res.status(200).json({
      stat: "2",
      message: error,
    });
  }
};
export { signup };
