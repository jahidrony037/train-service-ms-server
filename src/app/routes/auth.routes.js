const express = require('express');
const { singUP, login } = require('../controllers/auth.controller');
const router = express.Router();


router.post('/register',singUP);
router.post('/login',login);

module.exports =router;
