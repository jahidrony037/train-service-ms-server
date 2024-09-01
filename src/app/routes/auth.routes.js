const express = require('express');
const { singUP } = require('../controllers/auth.controller');
const router = express.Router();


router.post('/register',singUP);

module.exports =router;
