const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    eventTitle: {type: String},
    image: {type: String},
    isDeleted: {type: Number},
})

const eventModel = mongoose.model('events', eventSchema);
module.exports = eventModel