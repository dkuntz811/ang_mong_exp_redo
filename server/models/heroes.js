var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('schema');

//Create Schema for mongodb
var heroSchema=new Schema({
	alias: String,
	first_name: String,
	last_name: String,
	city: String,
	power_name: String
});



var Hero = mongoose.model('Heroes', heroSchema);


module.exports=Hero;
