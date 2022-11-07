const express = require('express');
const router = express.Router();

const { saveMoney } = require("../controllers/MoneyController")

router.post("/",saveMoney);

module.exports = router;