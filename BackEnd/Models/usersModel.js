const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{type: String},
    lastName:{type: String},
    email:{type: String},
    password:{type: String},
    address:{type: String},
    address2:{type: String},
    city:{type: String},
    state:{type: String},
    zip:{type: String},
    role:{type: String},
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel