module.exports = class ProductService {
  constructor({ Product }) {
    this.Product = Product;
  }

  products(page, perPage, order) {
    return this.Product.findAll({
      offset: (page - 1) * perPage,
      limit: perPage,
      order,
    });
  }
}
