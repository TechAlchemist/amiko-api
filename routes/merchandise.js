const express = require('express');
const router = express.Router();
const merchandiseController = require('../controllers/merchandise');


router.get('/', merchandiseController.getFeatured);
router.post('/upload', merchandiseController.postAntique);

module.exports = router;