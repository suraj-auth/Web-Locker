import jwt from "jsonwebtoken";
const checktkn = async (req, res) => {
  try {
    const { token } = req.query;
    const check = jwt.verify(token, process.env.KEY);
    console.log("user checked successfully");
    if (check) res.status(200).json({ valid: true });
    else res.status(200).json({ valid: false });
  } catch (error) {
    res.status(200).json({ valid: false });
  }
};
export { checktkn };
