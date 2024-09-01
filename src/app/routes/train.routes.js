const express = require('express');
const { addTrain, getTrain, singleTrain } = require('../controllers/train.controller');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router();

router.post('/trains',addTrain);
router.get('/trains', getTrain);
router.get('/trains/:id',verifyToken,singleTrain);

module.exports=router;