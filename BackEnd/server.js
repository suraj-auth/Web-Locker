import router from "./routers/router.js";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.get("/api/v1/user/home", (req, res) => {
  res.status(200).send("hello from home");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, console.log("app is listening on port " + port));
    console.log("Mongodb connected successfully");
  })
  .catch((err) => {
    console.log("error in connection to database : " + err);
    res.status(500).send("Server error : " + err);
  });
