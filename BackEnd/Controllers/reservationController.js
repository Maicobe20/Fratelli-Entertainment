const Reservation = require('../Models/reservationModel')

exports.holdReservation = async (req,res)=>{
    const reservation = await Reservation(req.body)
    const status = await reservation.save()
    if(status.fullName){
        res.json({status: 'success', value: status})
    }else{
        res.json({status:'no success', value: status})
    }
}

exports.getReservation = async (req, res)=>{
   
    const bookings = await Reservation.find()
    
    res.json(bookings)
}