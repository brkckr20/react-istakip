const express = require('express');
const router = express.Router();

const { saveProduct, getAllProduct } = require("../controllers/ProductController");

router.post("/", saveProduct);
router.get("/", getAllProduct);

module.exports = router;