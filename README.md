# File Observer
[![Build Status](https://travis-ci.org/ODudek/file-observer.svg?branch=master)](https://travis-ci.org/ODudek/file-observer)
Watch for change in your files and run your command!

## Config

Config file should be named `observer.conf.js` in main folder of your project. Example file
```
module.exports = {
    files: [
        'demo/test.js',
        'demo/test2.js'
    ], -> need to be an array
    command: '', -> command which will run after files changed
    clearAfterChange: true -> clear console after files changed
}
```
