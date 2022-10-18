const express = require('express');
const router = express.Router();

const { createCompany, getAllCompany, deleteCompany } = require('../controllers/CompanyController');

router.post('/', createCompany);
router.get('/', getAllCompany);
router.delete('/:id', deleteCompany);

module.exports = router;