const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  gmail: String,
});
const User = mongoose.model("User", userSchema);
module.exports = User; // Export the User model
