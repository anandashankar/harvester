// Load required packages
var mongoose = require('mongoose');

// Define our beer schema

var NewDeviceSchema = new mongoose.Schema({
	
	url: String 

});
	
/*var HarvesterSchema   = new mongoose.Schema({
	Harvester: [Contents]
});
*/
// Export the Mongoose model
module.exports = mongoose.model('NewDevice', NewDeviceSchema);

