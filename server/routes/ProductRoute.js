const express = require('express');
const router = express.Router();

const { saveProduct } = require("../controllers/ProductController");

router.post("/", saveProduct);

module.exports = router;