
const Service = require('../Models/serviceModel')
const ObjectId = require('mongodb').ObjectId

exports.addService = async (req, res)=>{
   const event = await new Service(req.body)
   const status =  await event.save()
   res.json(status)
}

exports.getAll = async (req, res)=>{
    const services = await Service.find()
    res.json(services)
 }

 exports.deleteService = async (req, res)=>{

   const Oid = ObjectId(req.params.id)
   console.log(req.params.id)
   const service = await Service.updateOne({_id: Oid},
      {$set:{isDeleted : 1}})
   res.json(service)
 }

 exports.uploadImage = (req, res) => {
   res.send(req.file);
 };

 exports.editService = async (req,res)=>{

   const Oid = ObjectId(req.params.id)
   const status = await Service.updateOne({_id:Oid},
      {$set: req.body})
      res.json(status)
 }
 
 exports.getAdminAll = async (req, res)=>{
   
   const services = await Service.find()
   res.json({status:'success', value: services})
}