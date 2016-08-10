var express=require('express')
 ,  location=express.Router()
 ,  bodyParser=require('body-parser')
 ,  gmap=require('../util/gplaces.js');

location.get('/',function (req,res,next) {

   gmap.placeSearch(req.query.origin,req.query.destination,res);
})
module.exports=location;
