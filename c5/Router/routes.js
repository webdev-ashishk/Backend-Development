const express = require("express");
const router = express.Router();
const login = require("../controller/controllers");
router.send("/login", login.loginFun);

module.exports = router;
