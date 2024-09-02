const express = require('express');
const { singUP, login, getAllUsers } = require('../controllers/auth.controller');
const router = express.Router();


router.post('/register',singUP);
router.post('/login',login);
router.get('/users', getAllUsers);

module.exports =router;
