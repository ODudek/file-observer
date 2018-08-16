const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const config = require('./observer.conf');
const ONE_SECOND = 1000;
const log = console.log;
class Observer {
	constructor(config) {
        console.clear();
        this.filesPath = config.files;
        this.files = [];
        this.createFileArray();
        this.setup();
    }

    createFileArray() {
        this.filesPath.map((filePath) => {
            this.files.push({ path: filePath, size: fs.statSync(filePath).size });
        });
    }
    
    setup() {
        this.files.map((file) => {
            fs.watchFile(path.normalize(file.path), { interval: ONE_SECOND }, (changedFile) => {
                if (changedFile.size !== file.size) {
                    this.watchHandler();
                }
            });
        });
    }

    watchHandler() {
        console.log('File Changed ...');
        log(chalk.green('File content at: ' + this.displayCurrentTime()))
    }

    displayCurrentTime() {
        const date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds}` : date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }
}

new Observer(config)
