const express = require('express');
const { addTrain, getTrain, singleTrain } = require('../controllers/train.controller');
const { verifyToken } = require('../middleware/verifyToken');
const { authorization } = require('../middleware/authorization');
const { userRole } = require('../constants');

const router = express.Router();

router.post('/trains',verifyToken,authorization(userRole.admin),addTrain);
router.get('/trains', getTrain);
router.get('/trains/:id',verifyToken,singleTrain);

module.exports=router;