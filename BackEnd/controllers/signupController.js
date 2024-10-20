import { sender } from "../email/emailSender.js";
import user from "../models/user.model.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
const signup = async (req, res) => {
  try {
    const { name, username, password, email, gender } = req.body;
    const saltRounds = 10;
    const myUuid = uuidv4();
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    let a = Date.now() + 3600000;
    const obj = {
      name,
      username,
      password: hashedPassword,
      email,
      gender,
      verifyToken: myUuid,
      verifyTokenExpiry: a,
    };
    let data = await user.create(obj);
    console.log("user signed up successfully");
    let resp = await sender(email, myUuid, data._id);
    res.status(200).send("user saved successfully");
  } catch (error) {
    res.status(500).send("error in singup controller : " + error);
  }
};
export { signup };
