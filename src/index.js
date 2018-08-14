(function() {
    console.clear();
    const fs = require('fs');
    const chalk = require('chalk');
    const config = require('./config');
    
    fs.watchFile(config.file, { interval: 1000 }, function() {
        console.log('File Changed ...');
        console.log('File content at : ' + new Date());
    });
})();
