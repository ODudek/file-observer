import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import { log, isArray, currentTime } from './helpers';
import config from './observer.conf';

const ONE_SECOND = 1000;
export class Observer {
	constructor(config) {
        console.clear();
        this.config = config;
        this.filesPath = this.config.files;
        this.files = [];
        this.createFileArray();
        this.setup();
    }

    initConfig() {
        this.clearConsole();

    }

    clearConsole () {
        this.config.clearAfterChange && console.clear();
    }

    errorHandler(message) {
        process.on('exit', () => {
            log(chalk.red(message));
        })
        process.exit();
    }

    createFileArray() {
        if (isArray(this.filesPath)) {
            this.filesPath.map((filePath) => {
                this.files.push({ path: filePath, size: fs.statSync(filePath).size });
            });   
        } else {
            this.errorHandler('`files` need to be an array...');
        }
    }
    
    setup() {
        this.files.map(async (file) => {
            const watchFile = await fs.watchFile(path.normalize(file.path), { interval: ONE_SECOND }, (changedFile) => {
                if (changedFile.size !== file.size) {
                    this.watchHandler();
                    // watchFile.stop();
                    // console.log('Stopped!')
                }
            });
        });
    }

    stopWatchFile(watchFile) {
        watchFile.stop();
        
    }

    watchHandler() {
        this.clearConsole();
        console.log('File Changed ...');
        log(chalk.green('File content at: ' + currentTime()))
    }
}

new Observer(config)
