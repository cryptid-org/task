const fg = require('fast-glob');
const fs = require('fs-extra');
const klawSync = require('klaw-sync');
const spawn = require('cross-spawn');
const yargs = require('yargs');

const paths = require('./paths');

// `spawnSync` is a patched version of `cross-spawn`'s  `spawn.sync`. It simply emits the
// executable/command name and arguments upon execution. This makes it easier to trace what
// stuff were called.
const spawnSync = function spawnSync(command, args, options) {
    const modifiedOptions = Object.assign({ stdio: 'inherit' }, options);

    console.log(`Executing | ${command} ${args.join(' ')}`);

    return spawn.sync(command, args, modifiedOptions);
};

// Clients can inject their own data into commands (by creating a `.task/inject` file,
// which should export a no-argument function).
const inject = (function loadInject() {
    if (fs.existsSync(paths.injectPath) || fs.existsSync(`${paths.injectPath}.js`)) {
        return require(paths.injectPath)();
    } else {
        return {};
    }
})();

// The object which will be passed to all command handler factories.
const dependencies = Object.freeze(Object.assign({}, inject, { fg, fs, klawSync, spawnSync, yargs }))

module.exports = dependencies;
