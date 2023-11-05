const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  name: String,
  gmail: String,
  password: Number,
});
const Register = mongoose.model("Register", registerSchema);
module.exports = Register;
