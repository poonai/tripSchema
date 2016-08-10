var scrapper = require('cheerio');
var request=require('urllib')
var getDetails=function (brand,model,cb) {
  request.request("http://www.cartrade.com/"+brand+"-cars/"+model+"/mileage",function (err,res,html) {
  //console.log(err);

   var $=scrapper.load(res.toString())
   cb($('p').html().split(" ")[2])
  // console.log(res.toString());
  })
}
exports.getDetails=getDetails
