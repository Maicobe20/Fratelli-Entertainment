const Message = require('../Models/messageModel')

exports.postMessages = async (req, res)=>{
    const message = await new Message(req.body)
    const status = await message.save()
    if(status){
        res.json({status:"success", value:status})
    }else{
        res.json({status:"no success", value:"Sorry Message Not Sent"})
    }
}

exports.getMessages = async (req, res)=>{
    const messages = await Message.find()
    res.json(messages)
}