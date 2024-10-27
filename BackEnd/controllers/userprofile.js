import user from "../models/user.model.js";
import jwt from "jsonwebtoken";
const userprofile = async (req, res) => {
  try {
    let { token } = req.query;
    const check = jwt.verify(token, process.env.KEY);
    let username = check.username;
    const find = await user.findOne({ username: username });
    if (find) {
      let obj = {
        name: find.name,
        username: find.username,
        gender: find.gender,
        email: find.email,
        plan: "free",
      };
      res.status(200).json({ status: true, userP: obj });
    } else {
      res.status(200).json({ status: false, message: "Token is invalid" });
    }
  } catch (error) {
    res.status(200).json({ status: false, message: "Token is invalid" });
  }
};
export { userprofile };
