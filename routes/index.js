var express = require("express");
const User = require("../models/form.models.js");
var router = express.Router();
const LoginModel = require("../models/login.models.js");
const RegisterModel = require("../models/register.models.js");
/* GET home page. */
router.get("/", function (req, res) {
  const token = req.cookies.token;
  console.log("token : " + token);
  if (token) {
    res.render("logout");
  } else {
    res.render("login");
  }
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
router.get("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.render("logout");
  // res.send("Welcome to logout page @#");
});
/* .post used to send the data || create the data */
router.post("/register", async (req, res) => {
  console.log(req.body);
  const obj = {
    name: req.body.name,
    gmail: req.body.gmail,
    password: req.body.password,
  };
  const _gmail = await RegisterModel.findOne({ gmail: obj.gmail });
  if (_gmail) {
    return res.redirect("/login");
  } else {
    await RegisterModel.create(obj);
  }

  res.cookie("token", "Singh", {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  });
  res.redirect("/logout");
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
  console.log("userGmail password is:: " + userGmail.password);
  console.log("user typed password is:: " + password);
  console.log("isMatch:: " + isMatch);
  if (isMatch) return res.redirect("/logout");
  if (!isMatch) return res.redirect("/login");

  res.cookie("token", "Singh", {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  });
});
router.get("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/logout");
});
module.exports = router;
