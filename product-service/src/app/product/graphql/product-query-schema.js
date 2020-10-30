const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    products(
      page: Int!
      perPage: ProductPageSizes!
      categoryId: Int
      sortBy: ProductSortByTypes
      nameTerm: String
    ): [Product]
  }
`;
