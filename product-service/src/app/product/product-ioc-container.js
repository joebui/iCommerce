const { createContainer, asClass, asValue } = require("awilix");
const amqp = require("amqplib/callback_api");

const db = require("../../../db/models");
const { USER_ACTIVITY } = require("./constants");
const ProductService = require("./product-service");
const ProductDb = require("./product-db");
const logger = require("../../../utils/custom-stdout-logging");

const container = createContainer();
container.register({
  Product: asValue(db.product),
  Category: asValue(db.category),
  Sequelize: asValue(db.Sequelize),
  productService: asClass(ProductService).singleton(),
  productDb: asClass(ProductDb).singleton(),
  amqp: asValue(amqp),
  logger: asValue(logger),
  USER_ACTIVITY: asValue(USER_ACTIVITY),
});

module.exports = container;
