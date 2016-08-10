var path = require('path');


var decoder=require('node-base64-image');
var convert=function (base64,cb) {
    name=Math.random();
  data=new Buffer(base64,'base64')
decoder.base64decoder(data,{filename:path.join(__dirname,'../photos/'+name )},function (err,saved) {
  if(err){console.log(err);}else {
    console.log(saved);
    cb(name)
  }
})
}

exports.converter=convert
