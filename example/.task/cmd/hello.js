const path = require('path');

module.exports = {
    command: 'hello <command>',
    desc: 'Hello!',
    builder(subcommand) {
        return subcommand(path.join(__dirname, 'hello-cmd'));
    },
    handler() { }
};
