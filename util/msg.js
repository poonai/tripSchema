var kue=require('kue')
 ,  queue=kue.createQueue()
 ,  msg91=require('msg91')("81434A3rGba9dY75583ac07","GDGVIT",4)
 , job
 , call
 , twilio=require('twilio')("AC7342c2878c87c455630e213b47e61736","0d67bd9f04f48e0a427fde57aa4a8610");
 var newJob=function (phone,msg) {
   job=queue.create('msg91',{number:phone,message:msg})
   job.save()
 }
queue.process('msg91',function (job,done) {
msg91.send(job.data.number,job.data.message,function (err,res) {
  if(err){
    console.log("error");
    console.log(err);
  }else {
    console.log(res);
  }
  done();
})
})

var newCall=function (phone,msg) {
  call=queue.create('call',{number:phone,message:msg});
  call.save()
}
queue.process('call',function (job,done) {
  twilio.makeCall({

    to:'+91'+job.data.number, // Any number Twilio can call
    from:'+1 855-425-1005 ', // A number you bought from Twilio and can use for outbound communication
    url: 'http://shivi.cloudapp.net/twilio/msg/' // A URL that produces an XML document (TwiML) which contains instructions for the call

}, function(err, responseData) {
   if(err)console.log(err);
    //executed when the call has been initiated.
    //console.log(responseData.from); // outputs "+14506667788"
    done()
});
})

exports.sendMessage=newJob
exports.makeCall=newCall
