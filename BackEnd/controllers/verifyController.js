import user from "../models/user.model.js";
const verifyAcc = async (req, res) => {
  try {
    const { tid, uid } = req.query;
    const data = await user.findById(uid);
    if (data.isVerified == true)
      res
        .status(200)
        .json({ stat: false, message: "user is already verified" });
    else if (
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
        .json({ stat: true, message: "user verified successfully" });
    } else
      res
        .status(200)
        .json({ stat: false, message: "user details are invalid" });
  } catch (error) {
    res.status(500).send("error in verify controller : " + error);
  }
};
export { verifyAcc };
