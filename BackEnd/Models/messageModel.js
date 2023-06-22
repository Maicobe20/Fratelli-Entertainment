const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    fullName: {type: String},
    email: {type: String},
    subject: {type: String},
    message: {type: String}
})

const messageModel = mongoose.model('messages', messageSchema)

module.exports = messageModel