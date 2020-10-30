const { createContainer, asClass, asValue } = require("awilix");

const db = require("../../../db/models");
const ProductService = require("./product-service");
const ProductDb = require("./product-db");

const container = createContainer();
container.register({
  Product: asValue(db.product),
  Category: asValue(db.category),
  Sequelize: asValue(db.Sequelize),
  productService: asClass(ProductService),
  productDb: asClass(ProductDb),
});

module.exports = container;
