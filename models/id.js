// Load required packages
var mongoose = require('mongoose');

// Define our beer schema

var IdSchema = new mongoose.Schema({
	
	id: String
});
	
/*var HarvesterSchema   = new mongoose.Schema({
	Harvester: [Contents]
});
*/
// Export the Mongoose model
module.exports = mongoose.model('Id', IdSchema);

