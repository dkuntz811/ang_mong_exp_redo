var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('schema');

//Create Schema for mongodb
var heroSchema=new Schema({
	alias: {type: String, required: true},
	first_name: String,
	last_name: String,
	city: String,
	power_name: String
});

console.log('mongoose error is here');

var Hero = mongoose.model('Heroes', heroSchema);


module.exports=Hero;
