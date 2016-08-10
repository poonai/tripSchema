var express=require('express')
 ,  msg=express.Router()
 ,  msg91=require('../util/msg.js');

msg.post('/',require('body-parser').json(),function (req,res,next) {

   msg91.sendMessage(parseInt(req.body.phone),req.body.message)
   res.json({status:"your request is queued"})
})
module.exports=msg
