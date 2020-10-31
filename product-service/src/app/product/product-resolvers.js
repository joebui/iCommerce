const { cradle } = require('./product-ioc-container');

module.exports = {
  products: (_parent, { page, perPage, categoryId, sortBy, nameTerm }, { req }) => {
    cradle.productService.publishUserActivity(req.useragent, {
      page,
      perPage,
      categoryId,
      sortBy,
      nameTerm,
    });
    return cradle.productService.getProducts(page, perPage, sortBy, categoryId, nameTerm);
  },
};
