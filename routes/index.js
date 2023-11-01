var express = require("express");
var router = express.Router();
var userModel = require("./users");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
//create
router.get("/create", async function (req, res) {
  const createdUser = await userModel.create({
    username: "anju",
    name: "anju",
    age: 20,
  });
  res.send(createdUser);
});
//Read
router.get("/allusers", async function (req, res) {
  const allUsers = await userModel.find();
  res.send(allUsers);
});
router.get("/deleteuser", async function (req, res) {
  const deletedUser = await userModel.findOneAndDelete({
    username: "anju",
  });
  res.send(deletedUser);
});
router.get("/addsession", function (req, res) {
  req.session.anju = true;
  res.send("session added successfully!");
});
router.get("/checksession", function (req, res) {
  console.log(req.session);
  if (req.session.anju === true) {
    res.send("you are banned");
  } else {
    res.send("you are not banned!");
  }
});
module.exports = router;
