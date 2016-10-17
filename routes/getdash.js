var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CityModel = require('./citymodule');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("we are in the getdash function");
  console.log(req.body);

  // console.log(mongoose.connection.readyState);
  //res.end("this is sent from getdash functon");
  CityModel.find({ip:req.body.ip},function(err,data){
    if(!err){
      console.log("data",data);
      res.end(JSON.stringify(data));
    }else{
      console.log("Error retriving the data");
      res.end("Error in retriving the data");
    }
  })
});

module.exports = router;
