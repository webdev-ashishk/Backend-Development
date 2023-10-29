const express = require("express");
const app = express();
//this is middlewares
app.use(function (req, res, ashish) {
  console.log(req);
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
  res.send("Welcome to Backend development by YT by Indian Creater !");
});
app.get("/profile", function (req, res) {
  res.send("This is great profile build by hard-work");
});
//Dynamic routes
app.get("/profile/:usename", function (req, res) {
  res.send(`hello from profile ${usename}`);
});
// app.get("/profile/anju", function (req, res) {
//   res.send("This is great profile build by hard-work");
// });
// app.get("/profile/deepika", function (req, res) {
//   res.send("This is great profile build by hard-work");
// });
// app.get("/profile/avdhesh", function (req, res) {
//   res.send("This is great profile build by hard-work");
// });
app.get("/about", function (req, res) {
  res.send("About Page!");
});
app.get("/root", function (req, res) {
  res.send("root page is here!! !");
});

app.listen(4000);
