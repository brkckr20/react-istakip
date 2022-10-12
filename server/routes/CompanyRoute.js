const express = require('express');
const router = express.Router();

const { createCompany, getAllCompany } = require('../controllers/CompanyController');

router.post('/', createCompany);
router.get('/', getAllCompany);

module.exports = router;