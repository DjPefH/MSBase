'use strict'
const Mongoose = require('mongoose');
let connexion = false;
const urlConnect = 'mongodb://mongo:27017'
class mongoConnect {
	constructor() {

		if(!connexion){
			console.log('connexion go');
			this.connect = 0;
			this.url = urlConnect;
			this.mongoseConnect = Mongoose.connect(urlConnect);
			connexion = this;
        }
        this.time = new Date()
        return connexion;
	}
	static getConnect() {
		return connexion;
	}
}
module.exports = mongoConnect