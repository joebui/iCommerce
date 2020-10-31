module.exports = class CategoryDb {
  constructor({ Category }) {
    this.Category = Category;
  }

  categoryById(categoryId) {
    return this.Category.findOne({ where: { id: categoryId } });
  }
};
