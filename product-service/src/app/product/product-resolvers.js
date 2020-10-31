const { cradle } = require("./product-ioc-container");

module.exports = {
  products: (
    _parent,
    { page, perPage, categoryId, sortBy, nameTerm },
    { req }
  ) => {
    cradle.productService.publishUserActivity(
      "SHOW_PRODUCTS",
      req.useragent,
      {
        page,
        perPage,
        categoryId,
        sortBy,
        nameTerm,
      },
      req.headers["x-real-ip"]
    );
    return cradle.productService.products(
      page,
      perPage,
      sortBy,
      categoryId,
      nameTerm
    );
  },
};
