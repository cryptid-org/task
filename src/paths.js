const path = require('path');

const taskDirectory = path.join(process.cwd(), '.task');
const commandPath = path.join(taskDirectory, 'cmd');
const injectPath = path.join(taskDirectory, 'inject');

const paths = Object.freeze({
   taskDirectory,
   commandPath,
   injectPath
});

module.exports = paths;
