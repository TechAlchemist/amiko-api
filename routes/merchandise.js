const express = require('express');
const router = express.Router();
const merchandiseController = require('../controllers/merchandise');


router.get('/', merchandiseController.getFeatured);

module.exports = router;