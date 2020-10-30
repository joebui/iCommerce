module.exports = class ProductService {
  constructor({ Product, Category }) {
    this.Product = Product;
    this.Category = Category;
  }

  products(page, perPage, order, categoryId) {
    const condition = {
      offset: (page - 1) * perPage,
      limit: perPage,
      order,
    };

    if (categoryId) condition.include = {
      model: this.Category,
      where: {
        id: categoryId,
      },
    }

    return this.Product.findAll(condition);
  }
}
