const { gql } = require('apollo-server-express');

const types = require('./types');
const querySchema = require('./query-schema');

module.exports = gql`
  ${types}
  ${querySchema}
`;
