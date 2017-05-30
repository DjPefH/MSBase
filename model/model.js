'use strict'
var mongoDb = require('../mongo/mongoConnect');
class Model {
	constructor(mongoConnect) {
		this.mongoConnect = new mongoDb;
	}
}
module.exports = Model;