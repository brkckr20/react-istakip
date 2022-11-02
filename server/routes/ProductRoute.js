const express = require('express');
const router = express.Router();

const { saveProduct, getAllProduct, removeProduct } = require("../controllers/ProductController");

router.post("/", saveProduct);
router.get("/", getAllProduct);
router.delete("/:id", removeProduct);

module.exports = router;