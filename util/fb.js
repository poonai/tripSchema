var fbgraph=require('fbgraph');
var Promises=require('bluebird');
var me=function (token,cb) {
  var data=fbgraph.get('/me/?access_token='+token,function (err,data) {
//    console.log(err);
  //  console.log(data);
    cb(err,data)
    //console.log(new Date().getFullYear()-data.birthday.split('/')[2])
  })

}
//me("CAACEdEose0cBAONGYKQZBZCqZCcOpBlrLi9WXTRioaFDVc5nydKlhX2SmHMs2fvgo8Dg9mR2tzFuC49MZCSn74lsujRIFsgLK9vGRRTTuOq1pZCJbz1snjnHfkVzMmheJy8PW3Kx4qmdt3MUsdidEk3XZAqWz0Cr5OPftZB3Xd7qaeIdXB8DG0mYm0y5gBdSN5YpbEeFQqOnAZDZD")
module.exports={
  me:me
}
