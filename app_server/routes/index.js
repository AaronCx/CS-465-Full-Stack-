const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/travel');
router.get('/', ctrlMain.index);

module.exports = router;