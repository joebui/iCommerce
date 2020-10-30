const { gql } = require('apollo-server-express');

const productEnums = require('../app/product/graphql/product-enums')
const productQueries = require('../app/product/graphql/product-query-schema');

module.exports = gql`
  ${productEnums}

  type Query
  ${productQueries}
`;
