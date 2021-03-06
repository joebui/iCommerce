const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("../src/graphql/type-defs");
const resolvers = require("../src/graphql/resolvers");
const logger = require("../helpers/custom-stdout-logging");

module.exports = (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (context) => context,
    playground: {
      settings: {
        "schema.polling.enable": false,
      },
    },
    formatError: (error) => {
      logger.error(error);
      return error;
    },
  });

  server.applyMiddleware({
    app,
  });
};
