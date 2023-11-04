var express = require("express");
const User = require("../models/form.models.js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
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

module.exports = router;
