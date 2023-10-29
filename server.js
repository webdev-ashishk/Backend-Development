const express = require("express");
const app = express();
//this is middlewares
app.use(function (req, res, next) {
  console.log("first middleware !");
  next();
});
app.use(function (req, res, next) {
  console.log("second middleware !");
  next();
});
app.get("/", function (req, res) {
  res.send("Welcome to Backend development by YT by Indian Creater !");
});
app.get("/profile", function (req, res) {
  res.send("This is great profile build by hard-work");
});
app.get("/about", function (req, res) {
  res.send("About Page!");
});
app.get("/root", function (req, res) {
  res.send("root page is here!! !");
});

app.listen(4000);
