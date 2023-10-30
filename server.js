const express = require("express");
const app = express();
//configure ejs
app.set("view engine", "ejs");
//configure static files
app.use(express.static("./public"));
//this is middlewares
app.use(function (req, res, ashish) {
  // console.log(req);
  console.log("middleware-1111 ");
  ashish();
});
app.use(function (req, res, anju) {
  console.log("middleware-222");
  anju();
});
app.use(function (req, res, next) {
  console.log(" middleware-333");
  next();
});
// routes
app.get("/", function (req, res) {
  res.send("Welcome to Backend development by YT by Indian creater_ !");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});

//Dynamic routes
app.get("/profile/:username", function (req, res) {
  res.send(`hello from profile ${req.params.username}`);
});
app.get("/user/:username", function (req, res) {
  res.send(`hello from userDatabase - ${req.params.username}`);
});
//Template engine
app.get("/template", function (req, res) {
  res.render("index");
});

//error handling
app.get("/error", function (req, res, next) {
  throw Error("Something Went wrong 404");
});
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
