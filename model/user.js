'use strict'
var Model = require('./model.js');
var mongoConnect = require('../mongo/mongoConnect');

class mUser extends Model{

	constructor() {
		super();
	}
	create(login,password) {

	}
}
module.exports = mUser;