const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    image:{type: String},
    eventType:{type: String},
    time:{type: String},
    description:{type:String},
    price:{type: String},
    isDeleted:{type:Number}
})

const serviceModel = mongoose.model('services', serviceSchema)

module.exports = serviceModel