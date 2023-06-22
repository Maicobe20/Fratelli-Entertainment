const express = require('express')
const router = express.Router()
const payementController = require('../Controllers/payementController')

router.post('', payementController.savePayement)


module.exports = router