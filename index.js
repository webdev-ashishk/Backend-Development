const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/contact", (req, res) => {
  res.send("This is contact Page!");
});
app.get("/login", (req, res) => {
  res.send("This is login Page !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
