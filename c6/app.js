const express = require("express");
// import express from "express";
const Task = require("./user-db.js");
const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

const todo = new Task({
  firstName: "deepika",
  lastName: "singh",
  age: 30,
  email: "deepikasingh098@gmail.com",
  address: {
    pincode: 231208,
    street: "gorakhpur,kushinagar",
    phone: "1234567890",
  },
});
todo.save();

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});
