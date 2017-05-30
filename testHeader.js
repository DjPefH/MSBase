'use strict';
const http = require('http');
const ElasticUrl = 'localhost';
class ApplicationElastic {

	constructor() {
		console.log('construction de lapp');
	}
	insert(index,type,id,data) {
		var options = {
			host: ElasticUrl,
			port: 443,
			path: '/' + index + '/' + type + '/' + id,
			method: 'PUT'
		};
		var req = https.request(options, function(res) {
			res.on('data', function (chunk) {
				console.log('BODY: ' + chunk);
			});
		});

		req.on('error', function(e) {
			console.log('problem with request: ' + e.message);
		});
		req.write(JSON.stringify(data));
		req.end();
	}
	get(index,type,id) {
		var options = {
			host: ElasticUrl,
			path: '/' + index + '/' + type + '/' + id,
			method: 'GET'
		};
		var req = https.request(options, function(res) {
			res.on('data', function (chunk) {
				console.log('Body' + chunk);
			});
		});

		req.on('error', function(e) {
			console.log('problem with request: ' + e.message);
		});
		req.end();		
	}
	search(index,type,query) {
		var options = {
			host: ElasticUrl,
			path: '/',
			auth: 'florent:testmdp',
			port:'3000',
			method: 'GET'
		};
		var req = http.request(options, function(res) {
			res.on('data', function (chunk) {
				console.log('Body' + chunk);
			});
		});

		req.on('error', function(e) {
			console.log('problem with request: ' + e.message);
		});
		req.end();		
	}
}

var App = new ApplicationElastic;

var arrayData = {};
arrayData.user = 'Venturaq';
arrayData.description = 'Expert Météor internet';
arrayData.age = "29 ans";

//App.insert('floflonette','test','2',arrayData);
App.search('floflonette','test','internes');
module.exports = ApplicationElastic;