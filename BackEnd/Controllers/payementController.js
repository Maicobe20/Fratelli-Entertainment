const Payement = require('../Models/payementModel')

exports.savePayement = async (req, res)=>{
    const payment = await Payement(req.body)
    const status = await payment.save()
    if(status.name){
        res.json({status: 'success', value: status})
    }else{
        res.json({status: 'no success', value: status})
    }
}