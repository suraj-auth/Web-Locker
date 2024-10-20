import mongoose from "mongoose";
const userquerySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true,
  },
  help: {
    type: String,
    required: true,
  },
});
const userquery = mongoose.model("Web-Locker-Users-query", userquerySchema);
export default userquery;
