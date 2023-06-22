const mongoose = require('mongoose')

const payementSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    cardNo: {type: String},
    price: {type:String}
})

const payementModel = mongoose.model('payments', payementSchema);
module.exports = payementModel