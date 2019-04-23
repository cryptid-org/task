module.exports = {
    command: 'world',
    desc: 'World!',
    handlerFactory(dependencies) {
        return function handler() {
            dependencies.hello();
        }
    }
};
