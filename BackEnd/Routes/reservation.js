const express = require('express')
const router = express.Router()
const reservationController = require('../Controllers/reservationController')

router.post('', reservationController.holdReservation)
router.get('', reservationController.getReservation)

module.exports = router