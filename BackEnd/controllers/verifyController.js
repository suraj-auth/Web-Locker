import user from "../models/user.model.js";
const verifyAcc = async (req, res) => {
  try {
    const { tid, uid } = req.query;
    const data = await user.findById(uid);
    if (data) {
      if (
        data.verifyToken == tid &&
        data.verifyTokenExpiry.getTime() > Date.now()
      ) {
        let a = await user.findByIdAndUpdate(uid, {
          $set: {
            isVerified: true,
            verifyToken: null,
            verifyTokenExpiry: null,
          },
        });
        console.log("user verified successfully");
        res
          .status(200)
          .json({ stat: "0", message: "user verified successfully" });
      } else res.status(200).json({ stat: "3", message: "Token is Invalid !" });
    } else {
      res.status(200).json({ stat: "2", message: "Credentials are invalid" });
    }
  } catch (error) {
    res.status(200).json({ stat: "1", message: error });
  }
};
export { verifyAcc };
