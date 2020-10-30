const DateTime = require("./shared/datetime-type");
const productResolvers = require("../app/product/product-resolvers");

module.exports = {
  DateTime,
  Query: {
    ...productResolvers,
  },
};
