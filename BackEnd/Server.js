const express = require('express')
const cors = require('cors')
const server = express()
const userRoute = require('./Routes/user')
const eventRoute = require('./Routes/events')
const serviceRoute = require('./Routes/services')
const reservationRoute = require('./Routes/reservation')
const messagesRoute = require('./Routes/messages')
const payementRoute = require('./Routes/payement')

const mongoose = require('mongoose')
const path = require('path')

mongoose.connect('mongodb://localhost:27017', err => {
    if(err){
        console.log(err)
        console.log("MongoDB not connected")
    }else{
        console.log("MongoDB connected")
    }
})

server.use(express.json())
server.use(cors())
server.use('/user', userRoute)
server.use('/events', eventRoute)
server.use('/services', serviceRoute)
server.use('/reservation', reservationRoute)
server.use('/messages', messagesRoute)
server.use('/payment', payementRoute)
server.use("/images", express.static(path.join(__dirname, "images")));


server.listen(80, ()=>{
    console.log("listening on 80....")
})