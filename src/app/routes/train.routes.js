const express = require('express');
const { addTrain, getTrain, singleTrain } = require('../controllers/train.controller');

const router = express.Router();

router.post('/trains',addTrain);
router.get('/trains', getTrain);
router.get('/trains/:id',singleTrain);

module.exports=router;