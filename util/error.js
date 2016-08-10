exports.errorHandler=function (err,req,res) {
    if(err=undefined){
      res.send('no routes')
    }else {
    res.json({description:err});    
    }

}
