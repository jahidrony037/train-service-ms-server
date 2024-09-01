const express = require('express');
const { createStation, getStations, singleStation } = require('../controllers/station.controller');
const router = express.Router();

router.post('/addStation', createStation);
router.get('/stations', getStations);
router.get('/stations/:id',singleStation);

module.exports = router;