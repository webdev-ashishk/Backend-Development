var express = require("express");
const User = require("../models/form.models.js");
var router = express.Router();
const LoginModel = require("../models/login.models.js");
const RegisterModel = require("../models/register.models.js");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
/* Get Form-page. */
router.post("/form", async (req, res) => {
  console.log(req.body);
  const obj = {
    name: req.body.name,
    gmail: req.body.gmail,
  };
  await User.create(obj);
  console.log("form submitted");
  res.json({ success: true });
});

// day#6 creating login logout feature!

/* GET -page. */
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});

/* .post used to send the data || create the data */
router.post("/register", async (req, res) => {
  console.log(req.body);
  const obj = {
    name: req.body.name,
    gmail: req.body.gmail,
    password: req.body.password,
  };
  await RegisterModel.create(obj);
  // res.send("register is completed");
  res.redirect("/login");
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  gmail = req.body.gmail;
  password = req.body.password;

  let userGmail = await RegisterModel.findOne({ gmail });
  console.log("login user data", userGmail);
  // if (userGmail) return res.redirect("/login");
  if (!userGmail) return res.redirect("/register");
  const isMatch = password == userGmail.password;
  console.log("userGmail password is " + userGmail.password);
  console.log("user typed password" + password);
  console.log("isMatch: " + isMatch);
  if (!isMatch) return res.redirect("/login");
  if (isMatch) return res.redirect("/logout");
});
router.get("/logout", (req, res) => {
  // res.redirect("/");
  res.render("logout");
});
module.exports = router;
