const { gql } = require("apollo-server-express");

const productType = require("../app/product/graphql/product-type");
const categoryType = require("../app/category/graphql/category-type");

module.exports = gql`
  scalar DateTime
  ${categoryType}
  ${productType}
`;
