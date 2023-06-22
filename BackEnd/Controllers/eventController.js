const Event = require('../Models/eventsModel')
const ObjectId = require('mongodb').ObjectId

exports.getEvents = async (req, res)=>{
    const events = await Event.find()
    res.json(events)
}

exports.addEvent = async (req, res)=>{
    console.log("here")
    const event = new Event(req.body)
    const status = await event.save()
    res.json(status)
}

exports.uploadImage = (req, res) => {
    res.send(req.file);
  };

exports.deleteEvent = async (req,res)=>{
    const Oid = ObjectId(req.params.id)
    const status = await Event.updateOne({_id: Oid},
        {$set:{isDeleted : 1}})
        if(status.acknowledged){
            res.json({status: 'success', value: status})
        }else{
            res.json({status: 'no success', value: status})
        }
}

exports.getAdminEvents = async (req, res)=>{
    
    const events = await Event.find()
    res.json({status:'success', value:events})
}