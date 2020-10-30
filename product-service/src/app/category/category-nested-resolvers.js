const { cradle } = require("./category-ioc-container");

module.exports = {
  category: ({ categoryId }) =>
    cradle.categoryService.getCategoryById(categoryId),
};
