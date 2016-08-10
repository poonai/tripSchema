var express=require('express')
 ,  twilio=express.Router()
 ,  caller=require('../util/msg.js');

twilio.post('/msg',require('body-parser').urlencoded({extended:false}),function (req,res,next) {
  res.set('Content-Type', 'text/xml');
  res.send("<?xml version='1.0' encoding='UTF-8'?>\
<Response>\
    <Say>Ram Kishore is at vit university vellore and he is requesting for your assistance</Say>\
</Response>");
})
twilio.post('/',require('body-parser').json(),function (req,res,next) {
  caller.makeCall(req.body.phone,req.body.message);
  res.json({message:'your call is queued'})
})
 module.exports=twilio
