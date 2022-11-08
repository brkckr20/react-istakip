const express = require('express');
const router = express.Router();

const { saveMoney, getMoney } = require("../controllers/MoneyController")

router.post("/", saveMoney);
router.get("/", getMoney);

module.exports = router;