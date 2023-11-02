var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  router.get("/welcome", function (req, res) {
    res.send("Welcome to backend development");
  });
});

module.exports = router;
