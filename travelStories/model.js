var mongoose=require('mongoose')
  , travelStories=mongoose.Schema;
  travelStories=new travelStories({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
    },
    storie:String
  })
var model=mongoose.model('stories',travelStories)
exports.save=function (req,res,next) {
var stor = new model({
    user:req.body.uid,
    storie:req.body.stories
  });
  stor.save();
  res.json({message:'stories saved'});
}
exports.get=function (req,res,next) {
  model.find({}).populate('user').exec(function (err,data) {
     res.json(data)
  })
}
