const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Routes for Examples
router.get('/', exampleController.getExamples);
router.post('/', exampleController.createExample);

module.exports = router;
