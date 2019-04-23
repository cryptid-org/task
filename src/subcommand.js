const yargs = require('yargs');

const dependencies = require('./dependencies')


function visit(commandObject) {
    const handler = commandObject.handlerFactory && commandObject.handlerFactory(dependencies);
    
    commandObject.builder = commandObject.builder && commandObject.builder.bind(null, subcommand);

    return Object.assign({ handler }, commandObject);
};

function subcommand(dir) {
    return yargs.commandDir(dir, { visit })
        .demandCommand()
        .help()
        .strict()
};

module.exports = subcommand;
