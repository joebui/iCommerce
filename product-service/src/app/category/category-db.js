module.exports = class CategoryDb {
  constructor({ Category }) {
    this.Category = Category;
  }

  getCategoryById(categoryId) {
    return this.Category.findOne({ where: { id: categoryId } });
  }
};
