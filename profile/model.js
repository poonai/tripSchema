var mongoose=require('mongoose')
 , connection=require('../util/mongolab.js').connection
 , autoIncrement=require('mongoose-auto-increment')
 , user=mongoose.Schema
 , fb=require('../util/fb.js')
 , selfie=require('../selfie/model.js')
 , storie=require('../travelStories/model.js');
 autoIncrement.initialize(connection);
 user=new user({
  name:String,
  gender:String,
  fbid:String,
  age:Number,
  selfie:[{type:mongoose.Schema.ObjectId,
           ref:'selfie'}]
 })

 model=mongoose.model('user',user);
exports.login=function (req,res,next) {
  fb.me(req.body.access_token,function (err,data) {
      if(data.error==undefined){
        model.count({fbid:data.id},function (err,c) {
          if(c==0){
           var user=new model({
             name:data.name,
             gender:data.gender,
             fbid:data.id//,
             //age:new Date().getFullYear()-data.birthday.split('/')[2]
           })
           user.save();
           model.findOne({fbid:data.id},function (err,u) {
             res.json(u)
           })
         }else {
           model.findOne({fbid:data.id}).populate('selfie').exec(function (err,r) {
             res.json(r)
           })
         }
        })
      }else {
        res.json({
          message:"send correct token"
        })
      }
  })
}
exports.authPostCheck=function (req,res,fbdata,next){
  model.findOne({_id:req.body.uid},function (err,data) {
     if(err)next("sometheing happend wrong at authPost Check findone");


     if(data.fbid==fbdata.id){
       next()
     }else {
       next("wrong authentication")
     }
  })
}
exports.saveSelfie=function (req,res,next) {
selfie.selfieSave(req,res,next,function (self) {
   model.update({_id:req.body.uid},{$push:{selfie:self._id}},function (err) {
      if(err)next('sometheing happend wrong in saveSelfie')
      model.findOne({_id:req.body.uid}).populate('selfie').exec(function (err,data) {
         res.json(data)
      })
    })
    //res.json(self)
})
}
exports.saveStories=function (req,res,next) {
  storie.save(req,res,next)
}
exports.getStories=function (req,res,next) {
  storie.get(req,res,next)
}
