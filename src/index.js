const {ApolloServer} = require('@apollo/server')
const {startStandaloneServer} = require('@apollo/server/standalone')

const typeDefs = require('./modules/schema');
const resolvers = require('./modules/resolvers');
const { config } = require('../config');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const bootstrap = async() => {
    const { url } = await startStandaloneServer(server, {
        listen: {port: config.port}
    });

    console.log(`��� Server ready at ${url}`);
}

bootstrap();