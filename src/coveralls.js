const path = require('path');

const spawn = require('cross-spawn');


function reportToCoveralls(lcov) {
    const { stdout } = spawn.sync(path.resolve(__dirname, '..', 'node_modules', '.bin', 'coveralls'), [], {
        input: lcov,
        stdio: []
    });

    return stdout.toString();
};

module.exports = {
    reportToCoveralls
};
