const { gql } = require('apollo-server-express');

const productType = require('../app/product/graphql/product-type')

module.exports = gql`
  scalar DateTime
  ${productType}
`;
