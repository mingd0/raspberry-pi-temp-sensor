const express = require('express');
const router = express.Router();
const {getTemperatures, setTemperature} = require('../../controllers/tempController')

router.route('/').get(getTemperatures).post(setTemperature)

module.exports = router;