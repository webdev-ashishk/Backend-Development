const { default: mongoose } = require("mongoose");

const loginSchema = new mongoose.Schema({
  gmail: String,
  password: Number,
});
const Login = mongoose.model("Login", loginSchema);
module.exports = Login;
