const express = require('express')
const router = express.Router()
const messagesController = require('../Controllers/messageController')

router.post('', messagesController.postMessages)
router.get('', messagesController.getMessages)

module.exports = router