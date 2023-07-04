const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome!!");
});
app.get("/ashish", (req, res) => {
  res.sendFile(path.join(__dirname, "ashish.html"));
});
app.get("/nitin", (req, res) => {
  res.sendFile(path.join(__dirname, "nitin.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
