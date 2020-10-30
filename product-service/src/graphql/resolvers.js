const DateTime = require("./shared/datetime-type");
const productResolvers = require("../app/product/product-resolvers");
const { ProductPageSizes } = require("../app/product/constants");

module.exports = {
  DateTime,
  ProductPageSizes,
  Query: {
    ...productResolvers,
  },
};
