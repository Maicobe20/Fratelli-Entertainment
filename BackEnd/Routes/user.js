const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.post('', userController.signup)
router.post('/login', userController.login)

module.exports = router

