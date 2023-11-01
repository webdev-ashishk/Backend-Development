var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro"); //this line create DB
const userschema = mongoose.Schema({
  username: String,
  name: String, 
  age: Number,
});
module.exports = mongoose.model("user", userschema);
