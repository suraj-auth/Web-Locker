import { handlequery } from "../controllers/queryController.js";
import { verifyAcc } from "../controllers/verifyController.js";
import { userdetail } from "../controllers/userController.js";
import { signup } from "../controllers/signupController.js";
import { userprofile } from "../controllers/userprofile.js";
import { login } from "../controllers/loginController.js";
import { checktkn } from "../controllers/checktkn.js";
import {
  addpassword,
  updatepassword,
  getAllpassword,
  getSinglepassword,
  deletepassword,
} from "../controllers/addpassword.js";
import express from "express";

const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/checktoken").get(checktkn);
router.route("/feedback").post(handlequery);
router.route("/userdetails").post(userdetail);
router.route("/verifyAccount").get(verifyAcc);
router.route("/userprofile").get(userprofile);
router.route("/addpassword").post(addpassword);
router.route("/updatepassword").put(updatepassword);
router.route("/getallpassword").get(getAllpassword);
router.route("/deletepassword").delete(deletepassword);
router.route("/getsinglepassword").get(getSinglepassword);

export default router;
