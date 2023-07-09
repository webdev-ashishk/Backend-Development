const express = require("express");
// import express from "express";
const Task = require("./Model/user-db.js");
const app = express();
var bodyParser = require("body-parser");
// parse application/json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 5000;
app.get("/", function (req, res) {
  res.send("Hello World");
});

// console.log(Task);
//----------Create(post)---------------->
app.post("/task", (req, res) => {
  const todo = new Task({
    name: "nitish",
    branch: "ce",
    rno: 1012,
  });
  todo.save();
});

//----------Read--------------->

app.get("/task", async (req, res) => {
  // const result = await Task.find();
  // const result = await Task.find({ rno: { $gt: 108 } });
  const result = await Task.findById("64aa472e6a19006e3d791e27");
  res.json("Welcome" + result);
});
//----------Update---------------->
app.put("/task", async (req, res) => {
  const result = await Task.findByIdAndUpdate("64aa48e7ab0f6c7dc07a0efd", {
    name: "nitish-nitish",
    branch: "ce-ce",
    rno: 1012,
  });
});

app.patch("/task", async (req, res) => {
  const result = await Task.findByIdAndUpdate("64aa48e7ab0f6c7dc07a0efd", {
    name: "nitishK",
    branch: "cs",
    rno: 1012,
  });
});

//----------Delete---------------->

app.delete("/task", async (req, res) => {
  const result = await Task.findByIdAndDelete("64aa472e6a19006e3d791e27");
  res.json("deleted" + result);
});

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});
