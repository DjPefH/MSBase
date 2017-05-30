'use strict'
const express = require('express');

class serverExpress {
	constructor(port,route) {
		this.listenerExpress = new express();
		this.listenerExpress.use(route);
		this.listenerExpress.listen(port,function() {
			console.log('I listen on port : ' + port);
		});
	}
}
module.exports = serverExpress;