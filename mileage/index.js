var express=require('express')
var mileage=express.Router();
var mileageApi=require('../util/scrapper.js')

mileage.get('/',function (req,res,next) {
mileageApi.getDetails(req.query.brand,req.query.model,function (mile) {
  res.json({mileage:mile})
})
})
module.exports=mileage
