const mongoose = require("mongoose");
const { Schema } = mongoose;

const friendSchema = new Schema({
  name: String, // short hand way to write type string!
  branch: {
    type: String,
    required: true,
    upperCase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: "Number",
});

const friendModel = mongoose.model("friendModel", friendSchema);
module.exports = friendModel;
