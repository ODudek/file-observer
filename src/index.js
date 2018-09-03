import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import { log, isNil, isArray, currentTime } from './helpers';
import config from './observer.conf';
import { exec } from 'child_process';

const ONE_SECOND = 1000;
export class Observer {
	constructor(config) {
        console.clear();
        this.config = config;
        this.filesPath = this.config.files;
        this.files = [];
        this.createFileArray();
        this.setup();
        this.fileChanged;
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
            await fs.watchFile(path.normalize(file.path), { interval: ONE_SECOND }, (changedFile) => {
                if (changedFile.size !== file.size) {
                    this.watchHandler(file.path);
                    this.runCommand();
                }
            });
        });
    }

    watchHandler(fileName) {
        this.clearConsole();
        log(chalk.green(`[${currentTime()}] - File ${chalk.white(chalk.bold(fileName))} changed...`));
        log(`Running ${chalk.blue(config.command)}`);
    }

    runCommand() {
        const command = exec('npm test');
        command.stdout.on('data', (data) => {
            if (data.includes('fail')) {
                log(chalk.red(data));
            } else if (data.includes('pass')) {
                log(chalk.green(data));
            } else {
                log(data);
            }
        })
    }
}

new Observer(config);
