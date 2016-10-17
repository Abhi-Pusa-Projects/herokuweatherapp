var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cityModel  = require('./citymodule');

router.post('/',function(req,res,next){
    //console.log("calling from delete route function");
    // console.log(mongoose.connection.readyState);
    // console.log(req.body);
    cityModel.remove(req.body,function(err){
      if(!err){
        res.end("data deleted successfully");
      }
      else{
        res.end("data not removed");
      }
    })
});

module.exports = router;
