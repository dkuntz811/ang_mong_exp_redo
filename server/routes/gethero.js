var express = require('express');
var router = express.Router();
var Hero = require('../models/heroes');

router.get('/', function(req, res){
  Hero.find({}, function (err, heroes){
    if(err){
      console.log('err in get is ', err);
      res.sendStatus(500);
      return;
    }
    res.send(heroes);
  });
});

module.exports = router;
