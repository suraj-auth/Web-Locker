import user from "../models/user.model.js";
const userdetail = async (req, res) => {
  try {
    const { username, email } = req.body;
    const find = await user.findOne({ username: username });
    if (find)
      res.status(200).json({
        stat: "1",
        message: "This Username is already in use, use another username",
      });
    else {
      const findemail = await user.findOne({ email: email });
      if (findemail)
        res.status(200).json({
          stat: "2",
          message: "This Email is already in use, use another email",
        });
      else
        res.status(200).json({
          stat: "0",
          message: "User details are correct",
        });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      stat: "3",
      message: error,
    });
  }
};
export { userdetail };
