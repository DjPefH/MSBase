'use strict'

class userController {
	create(req,res) {
		var mUser = require('../model/user.js');
		var modelUser = new mUser();
		res.send('Ok bb');
		console.log(req.headers);
	}
}

module.exports = userController;