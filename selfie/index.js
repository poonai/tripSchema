var express=require('express');
var selfie=express.Router();
var model=require('./model')
var path = require('path');
selfie.get('/',function (req,res,next) {
model.getSelfie(res)
})
selfie.get('/:id',function (req,res,next) {
res.sendFile(path.join(__dirname,'../photos/'+req.params.id+'.jpg'))
})
module.exports=selfie
