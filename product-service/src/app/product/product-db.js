module.exports = class ProductService {
  constructor({ Product, Category, Sequelize }) {
    this.Product = Product;
    this.Category = Category;
    this.Op = Sequelize.Op;
  }

  products(page, perPage, order, categoryId, nameTerm) {
    const condition = {
      offset: (page - 1) * perPage,
      limit: perPage,
      order,
    };

    if (nameTerm)
      condition.where = { name: { [this.Op.iLike]: `%${nameTerm}%` } };
    if (categoryId) {
      condition.include = {
        model: this.Category,
        where: {
          id: categoryId,
        },
      };
    }

    return this.Product.findAll(condition);
  }
};
