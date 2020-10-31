module.exports = class CategoryService {
  constructor({ categoryDb }) {
    this.categoryDb = categoryDb;
  }

  categoryById(categoryId) {
    return this.categoryDb.categoryById(categoryId);
  }
};
