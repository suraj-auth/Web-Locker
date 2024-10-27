import userquery from "../models/help.model.js";
const handlequery = async (req, res) => {
  const { name, username, email, phonenumber, help } = req.body;
  try {
    let obj = { name, username, email, phonenumber, help };
    await userquery.create(obj);
    res.status(200).send("true");
  } catch (error) {
    res.status(200).send("false");
  }
};
export { handlequery };
