const express = require('express');
const { purchaseTicket, getTickets } = require('../controllers/ticket.controller');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

router.post('/ticket/purchase',verifyToken,purchaseTicket);
router.get('/tickets',verifyToken, getTickets);
module.exports = router;