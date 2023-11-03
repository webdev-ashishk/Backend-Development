var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/flash", function (req, res) {
  req.flash("salary", 2000);
  req.flash("name", "anju");
  res.send("salary and name is created by flash");
});

router.get("/checkflash", function (req, res) {
  console.log(req.flash("salary"), req.flash("name"));
  res.send("check in your terminal");
});
module.exports = router;
