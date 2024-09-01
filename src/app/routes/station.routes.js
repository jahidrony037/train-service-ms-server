const express = require('express');
const { createStation, getStations } = require('../controllers/station.controller');
const router = express.Router();

router.post('/addStation', createStation);
router.get('/stations', getStations);

module.exports = router;