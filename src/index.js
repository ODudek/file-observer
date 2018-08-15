(function() {
	console.clear();
	const fs = require('fs');
	// const chalk = require('chalk');
	const config = require('./config');
	const path = require('path');
	fs.watchFile(path.normalize(config.file), { interval: 1000 }, () => {
		console.log('File Changed ...');
		console.log('File content at : ' + new Date());
	});
})();

// class Observer {
// 	constructor(files) {
// 		this.os = require('os');
// 		this.fs = require('fs');
// 		this.chalk = require('chalk');
// 		this.path = require('path');
// 		this.files = files;
// 	}

// 	isWindows() {
// 		return this.os.platform() === 'win32' ? true : false;
// 	}

// 	convertPaths() {
// 		if (this.isWindows()) {
// 			this.path.join(__dirname)
// 		}
// 	}
// }

// new Observer()
