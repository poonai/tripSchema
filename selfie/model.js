var mongoose=require('mongoose')
 ,  autoIncrement=require('mongoose-auto-increment')
 ,  selfie=mongoose.Schema
 ,  selfie=new selfie({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
    },
    image:String,
    caption:String,
    rating:String,
    lat:Number,
    lng:Number
 })
 var imageConverter=require('../util/baseToImage.js')
 autoIncrement.initialize(require('../util/mongolab.js').connection)

 var model=mongoose.model('selfie',selfie)
 exports.selfieSchema=selfie
 exports.selfieSave=function (req,res,next,cb) {
console.log(req.body.image);
    imageConverter.converter(req.body.image,function (filename) {
         console.log("going");
      var self=new model({
       user:req.body.uid,
       image:filename,
       caption:req.body.caption,
       rating:req.body.rating,
       lat:req.body.lat,
       lng:req.body.lng
     });
     self.save();
     console.log("saved");
     console.log(self);
     cb(self)
    })


 }
 exports.getSelfie=function (res) {
     model.find({}).populate('user').exec(function (err,data) {
       res.json(data)
     })
 }
