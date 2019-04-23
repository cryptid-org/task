const yargs = require('yargs');

const dependencies = require('./dependencies')


function visit(commandObject) {
    // When using yargs, sadly, we cannot inject our own stuff into command handlers (as arguments).
    // We could augment the yargs object with appropriate fields, however, that approach is not really
    // clean. 
    // Instead, we are using the command visitor feature of yargs and so-called
    // handler factories. These are dead simple functions that take the injected dependencies as
    // arguments and return a yargs handler. Therefore, closure allows us to use the dependencies
    // in the handlers.
    //
    // The actual handler will be either the one created by the factory, or the one actually
    // defined on the `commandObject`. The latter takes precendence.
    const handler = commandObject.handlerFactory && commandObject.handlerFactory(dependencies);
    
    // We need to pass the dependencies down the chain, as multiple `yargs.commandDir`s are
    // issued. We do this, by patching the builder - the default yargs parameter is thrown out by
    // the bound subcommand function. Might be just as ugly as patching the yargs object :'(
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
