const { gql } = require("apollo-server-express");

module.exports = gql`
  enum ProductSortByTypes {
    NAME_ASC
    NAME_DESC
    PRICE_ASC
    PRICE_DESC
    CREATED_DATE_ASC
    CREATED_DATE_DESC
  }

  enum ProductPageSizes {
    FIVE
    TEN
    FIFTHTEEN
    TWENTY
  }
`;
