const express = require('express');
const router = express.Router();

const { saveMoney, getMoney, deleteMoney } = require("../controllers/MoneyController")

router.post("/", saveMoney);
router.get("/", getMoney);
router.delete("/:id", deleteMoney);

module.exports = router;