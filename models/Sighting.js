var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SightingSchema = new Schema({
	name: { type: String, lowercase: true, maxlength: 20, required: true },
	status: {
		type: String,
		lowercase: true,
		enum: [
	      'extinct',
	      'extinct in the wild',
	      'critically endangered',
	      'endangered',
	      'vulnerable',
	      'near threatened',
	      'conservation dependent',
	      'least concern'
		]
	}
})

module.exports = mongoose.model('Sighting', SightingSchema);