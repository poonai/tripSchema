var Uber = require('node-uber');
var Promises=require('bluebird')
var express=require('express')
var uberR=express.Router()
var uber = new Uber({
  client_id: 'LcUJHNbSCvoEAFC_CokE9m4h8vCJreuD',
  client_secret: 'wF--C33ghV4AAaV_-czRZEzkbzIijhvfXKo87ExM',
  server_token: 'ySkayYxcB6zZW-Y-pPY8WoQ80A7lRPArAoLj2bDP',
  redirect_uri: 'REDIRECT URL',
  name: 'ADGHACK'
});

uberR.get('/',function (req,res,next) {
console.log("going");
checkUber(req.query.lat,req.query.lng,function (available,service) {
  if(available){
    res.json({available:"true",response:service})
  }else {
    res.json({available:"false"})
  }
})
})


var checkUber=function (lat,lng,cb) {

  uber.products.list({ latitude: lat, longitude: lng }, function (err, res) {
    if(err){console.log(err);}
    if(res.products.length==0){
      cb(false,res)
    }else {
      cb(true,res)
    }
    });




}
module.exports=uberR
