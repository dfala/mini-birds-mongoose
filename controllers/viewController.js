var exports = module.exports = {};
var Sight = require('../models/Sighting.js')

exports.post = function (req, res) {
	var newSighting = Sight(req.body);
	newSighting.save(function (err, result) {
		if (err) return res.status(500).send(err);
		res.send(result);
	})
}

exports.put = function (req, res) {	
	Sight.findByIdAndUpdate(req.params.id, req.body, function (err, response) {
		if (err) return res.status(500).send(err);
		res.json(response);
	})
}

exports.delete = function (req, res) {
	Sight.findByIdAndRemove(req.params.id, function (err, response) {
		if (err) return res.status(500).send(err);
		res.json(response);
	})
}

exports.get = function (req, res) {
	Sight.find({}, function (err, response) {
		if (err) return res.status(500).send(err);
		res.json(response);
	})
}