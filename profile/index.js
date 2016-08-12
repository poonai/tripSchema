var express=require('express');
var fb=require('../util/fb.js');
var profile=express.Router();
var model=require('./model.js')
profile.post('/',require('body-parser').json(),function (req,res,next) {
model.login(req,res,next);
})
profile.get('/',function (req,res,next) {
  res.json({
    status:true,
    message:"working"
  })
})
profile.post('/selfie',require('body-parser').json(),require('../util/auth.js').userPostAuth,function (req,res,next) {
model.saveSelfie(req,res,next);
})
profile.post('/stories',require('body-parser').json(),require('../util/auth.js').userPostAuth,function (req,res,next) {
model.saveStories(req,res,next)
})
profile.get('/stories',function (req,res,next) {
  model.getStories(req,res,next)
})
module.exports=profile
