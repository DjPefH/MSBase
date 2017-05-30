'use strict';
const MongoDB = require('./mongo/mongoConnect');
const serverExpress = require('./server/serverExpress');
const Router = require('./routes/routes');
const ListenPort = 3000;
const MongoUrl = 'mongodb://mongo:27017';

class ApplicationLogin {

	constructor() {
		
		this.mongoConnect = new MongoDB(MongoUrl);
		this.router = Router;
		this.server = new serverExpress(ListenPort,this.router);
	}

}

var App = new ApplicationLogin;
module.exports = ApplicationLogin;