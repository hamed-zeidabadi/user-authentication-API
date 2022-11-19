const router = require("express").Router();
const { login, register, allUser } = require("../Controller/User_Controller");

module.exports = router.post("/register", register).post("/login", login).get("/users", allUser);
