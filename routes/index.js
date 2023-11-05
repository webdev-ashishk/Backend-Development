var express = require("express");
const User = require("../models/form.models.js");
var router = express.Router();

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
router.post("/register", (req, res) => {
  res.render("register");
});
router.post("/login", (req, res) => {
  res.render("login");
});
router.get("/logout", (req, res) => {
  res.redirect("/");
});
module.exports = router;
