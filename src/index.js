#!/usr/bin/env node
const fs = require('fs-extra');

const paths = require('./paths');
const subcommand = require('./subcommand');


(function main() {
    if (!fs.existsSync(paths.taskDirectory)) {
        console.warn('.task directory does not exist!');
        process.exit(-1);
    }
    
    if (!fs.existsSync(paths.commandPath)) {
        console.warn('.task/cmd command directory does not exist!');
        process.exit(-1);
    }
    
    subcommand(paths.commandPath)
        .argv;
})();
