const express = require("express");
const loginFun = (req, res) => {
  res.json({
    name: "ashishK",
    branch: "cse",
  });
};

module.exports = loginFun;
