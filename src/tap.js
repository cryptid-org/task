const path = require('path');

const spawn = require('cross-spawn');


function tapToJUnit(tap) {
    const { stdout } = spawn.sync(path.resolve(__dirname, '..', 'node_modules', '.bin', 'tap-junit'), [], {
        input: tap,
        stdio: []
    });

    return stdout.toString();
};

module.exports = {
    tapToJUnit
};
