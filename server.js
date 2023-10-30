const { log } = require("console");
const express = require("express");
const app = express();
const port = 3000;
//middlewares
app.use((req, res, next) => {
  console.log("middleware-1");
  next();
});
//ejs setup
app.set("view engine", "ejs");
// static file setup
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.render("index", { age: 20 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
