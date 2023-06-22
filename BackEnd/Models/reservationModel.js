const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
    fullName: {type: String},
    email: {type: String},
    eventType: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type:String},
    date: {type: Date},
    confirmationNo: {type: String},
    phone: {type: Number},
    done: 0
})

const reservationModel = mongoose.model('reservations', reservationSchema)
module.exports = reservationModel