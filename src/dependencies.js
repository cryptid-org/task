const fs = require('fs-extra');
const spawn = require('cross-spawn');
const yargs = require('yargs');

const paths = require('./paths');


const spawnSync = function spawnSync(command, args, options) {
    const modifiedOptions = Object.assign({ stdio: 'inherit' }, options);

    console.log(`Executing | ${command} ${args}`);

    return spawn.sync(command, args, modifiedOptions);
};

const inject = (function loadInject() {
    if (fs.existsSync(paths.injectPath) || fs.existsSync(`${paths.injectPath}.js`)) {
        return require(paths.injectPath)();
    } else {
        return {};
    }
})();

const dependencies = Object.freeze(Object.assign({}, inject, { fs, spawnSync, yargs }))

module.exports = dependencies;
