import user from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const find = await user.findOne({ username: username });
    if (!find)
      res.status(200).json({
        stat: "1",
        message: "Username is Invalid",
      });
    else if (find.isVerified == false)
      res.status(200).json({
        stat: "2",
        message: "User Email is not verified",
      });
    else {
      let check = await bcrypt.compare(password, find.password);
      if (check) {
        const user = {
          username: find.username,
          password: find.password,
        };
        const token = jwt.sign(user, process.env.KEY, { expiresIn: "10d" });
        console.log("user logged in successfully");
        res.status(200).json({
          stat: "0",
          tkn: token,
        });
      } else
        res.status(200).json({
          stat: "3",
          message: "Password is incorrect",
        });
    }
  } catch (error) {
    res.status(500).json({
      stat:"4",
      message:"error in login controller" + error,
    });
  }
};
export { login };
