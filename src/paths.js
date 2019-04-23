const path = require('path');

const taskDirectory = path.join(process.cwd(), '.task');
// All commands should be placed in this directory (or subdirectories of course).
const commandPath = path.join(taskDirectory, 'cmd');
// Script for custom data injection (see `dependencies.js`).
const injectPath = path.join(taskDirectory, 'inject');

const paths = Object.freeze({
   taskDirectory,
   commandPath,
   injectPath
});

module.exports = paths;
