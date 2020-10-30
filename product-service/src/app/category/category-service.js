module.exports = class CategoryService {
  constructor({ categoryDb }) {
    this.categoryDb = categoryDb;
  }

  getCategoryById(categoryId) {
    return this.categoryDb.getCategoryById(categoryId);
  }
};
