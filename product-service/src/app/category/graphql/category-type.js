const { gql } = require("apollo-server-express");

module.exports = gql`
  type Category {
    id: Int
    name: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;
