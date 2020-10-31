const { createContainer, asClass, asValue } = require("awilix");

const db = require("../../../db/models");
const CategoryService = require("./category-service");
const CategoryDb = require("./category-db");

const container = createContainer();
container.register({
  Category: asValue(db.category),
  categoryService: asClass(CategoryService).singleton(),
  categoryDb: asClass(CategoryDb).singleton(),
});

module.exports = container;
