var express = require('express');
var router = express.Router();
var Hero = require('../models/heroes');

//add new hero to database
router.post('/', function (req,res){
	console.log('POST', req.body);
	var hero = Hero(req.body);
	hero.save(function (err){
		if (err){
			res.sendStatus(500);
			return;
		}
		res.sendStatus(201);
		console.log('Heros Posted succesfully');
	});
});

module.exports = router;
