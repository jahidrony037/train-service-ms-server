const express = require('express');
const { purchaseTicket } = require('../controllers/ticket.controller');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

router.post('/ticket/purchase',verifyToken,purchaseTicket);
module.exports = router;