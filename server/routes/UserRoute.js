const express = require("express");
const router = express.Router();

const { getUsers, registerUser, loginUser } = require("../controllers/UserController")

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;