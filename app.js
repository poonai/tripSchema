var express=require('express')
var app=express()
, mongoose=require('mongoose')
, bodyParser=require('body-parser');
mongoose.connect("mongodb://boy:anvena@ds013221.mlab.com:13221/selectdine");

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',require('./profile/index.js'));
app.use('/location',require('./location'))
app.use('/selfie',require('./selfie/index.js'))
app.use('/uber',require('./uber/index.js'))
app.use('/mileage',require('./mileage'))
//app.use('/message',require('./mg91/index.js'))
app.use('/twilio',require('./twilio/index.js'))
app.use(require('./util/error.js').errorHandler);
app.listen(process.env.PORT||1234)
