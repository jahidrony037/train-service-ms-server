const express = require('express');
const { createStation, getStations, singleStation } = require('../controllers/station.controller');
const { verifyToken } = require('../middleware/verifyToken');
const { authorization } = require('../middleware/authorization');
const { userRole } = require('../constants');
const router = express.Router();

router.post('/addStation',verifyToken, authorization(userRole.admin),createStation);
router.get('/stations', getStations);
router.get('/stations/:id',verifyToken,singleStation);

module.exports = router;