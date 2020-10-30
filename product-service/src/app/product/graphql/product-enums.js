const { gql } = require("apollo-server-express");

module.exports = gql`
  enum ProductSortByTypes {
    PRICE_ASC
    PRICE_DESC
    CREATED_DATE_ASC
    CREATED_DATE_DESC
  }
`;
