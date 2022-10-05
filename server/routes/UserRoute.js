const express = require("express");
const router = express.Router();

const { getUsers, registerUser } = require("../controllers/UserController")

router.get("/", getUsers);
router.post("/register", registerUser);

module.exports = router;