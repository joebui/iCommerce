const { gql } = require("apollo-server-express");

module.exports = gql`
  type Product {
    id: Int
    name: String
    price: Int
    categoryId: Int
    category: Category
    createdAt: DateTime
    updatedAt: DateTime
  }
`;
