const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    products(
      page: Int!
      perPage: Int!
      categoryId: Int
      sortBy: ProductSortByTypes
    ): [Product]
  }
`;
