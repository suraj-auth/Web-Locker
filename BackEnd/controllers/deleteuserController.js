import user from "../models/user.model.js";
const deleteuser = async (req, res) => {
  try {
    let { userID } = req.query;
    let data = await user.deleteOne({ _id: userID });
    if (data) res.status(200).send("true");
    else res.status(200).send("false");
  } catch (error) {
    res.status(200).send("false");
  }
};
export { deleteuser };
