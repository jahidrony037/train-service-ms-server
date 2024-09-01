const express = require('express');
const { addFunds, getWallet } = require('../controllers/wallet.controller');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

router.post('/wallet/addFund',verifyToken,addFunds);
router.get('/wallet',verifyToken,getWallet);
module.exports=router;