const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');


// GET /api/sales
// Accepts query parameters for search, filters, sort, pagination
router.get('/', salesController.getSales);


module.exports = router;
