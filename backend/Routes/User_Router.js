const router = require("express").Router();
const { login, register } = require("../Controller/User_Controller");

module.exports = router.post("/register", register).post("/login", login);
