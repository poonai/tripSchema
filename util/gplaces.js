var urllib=require('urllib')
 ,  api_key
 ,  publicConfig
 ,  config=require('./config.js')
 ,  Promises=require('bluebird')
 ,  plumper=require('plumper')
 ,  anyboxer=require('anyboxer');
publicConfig = {
  key:config.api_key ,
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             false
};
exports.init=function (key) {
  api_key=key;

}

var googlemap=require('googlemaps')

exports.placeSearch=function (ori,dest,res) {

  var gm = new googlemap(publicConfig);
  gm.directions({
    origin:ori,
    destination:dest
  },function (err,data) {
    var steps=data.routes[0].legs[0].steps;
    var d=[];
    for (var i = 0; i < steps.length; i++) {
      d.push({lat:steps[i].start_location.lat+"",lng:steps[i].start_location.lng+""});
    }
    len=steps.length-1;
    d.push({lat:steps[len].end_location.lat+"",lng:steps[len].end_location.lng+""})
    res.json(d)



})
}
/*var boxTocoord=function(boxes){
  coords=[];
  for(i=0;i<boxes.length;i++){

    coords.push({lat:boxes[i][0][0]+"",lng:boxes[i][0][1]+""})
    coords.push({lat:boxes[i][1][0]+"",lng:boxes[i][1][1]+""})
    /*for (var j = 0; i < boxes[i].length; j++) {
      console.log(boxes[i][j]+"poda");
         //
    }*/

/*  }
  return coords;
}
var coordstoPlaceid=function (coords) {
  placeid=[];
  for (var i = 0; i < coords.length; i++) {
   urllib.request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+coords[i].lat+","+coords[i].lng+"&radius=1000&type=restaurant&key="+config.api_key,{method:'GET'},function (err,data,response) {
    console.log(JSON.parse(data));
     })

  }
}
*/
