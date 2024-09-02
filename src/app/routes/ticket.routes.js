const express = require('express');
const { purchaseTicket } = require('../controllers/ticket.controller');
const router = express.Router();

router.post('/tickets/purchase',purchaseTicket)
module.exports = router;