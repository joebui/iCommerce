const DateTime = require("./shared/datetime-type");
const productResolvers = require("../app/product/product-resolvers");
const { ProductPageSizes } = require("../app/product/constants");
const { category } = require('../app/category/category-nested-resolvers')

module.exports = {
  DateTime,
  ProductPageSizes,
  Query: {
    ...productResolvers,
  },
  Product: {
    category
  }
};
