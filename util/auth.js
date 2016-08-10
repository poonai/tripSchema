var fb=require('./fb.js');
var profileModel=require('../profile/model.js');
exports.userPostAuth=function (req,res,next) {
  fb.me(req.body.access_token,function (err,data) {
    if(data.error==undefined){
        profileModel.authPostCheck(req,res,data,next)
    }else {
      next('invalid token')
    }

  })
}
