const {ApolloServer} = require('apollo-server');

const {resolvers} = require('./resolvers');
const {typeDefs} = require('./typeDefs');

const server = new ApolloServer({typeDefs, resolvers, tracing: true});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
