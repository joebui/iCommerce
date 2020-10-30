module.exports = class ProductService {
  constructor({ productDb }) {
    this.productDb = productDb;
  }

  getProducts(page, perPage, sortBy, categoryId) {
    return this.productDb.products(
      page,
      perPage,
      ProductService.getDbOrderType(sortBy),
      categoryId
    );
  }

  static getDbOrderType(sortBy) {
    switch (sortBy) {
      case "NAME_ASC":
        return [["name", "ASC"]];
      case "NAME_DESC":
        return [["name", "DESC"]];
      case "PRICE_ASC":
        return [["price", "ASC"]];
      case "PRICE_DESC":
        return [["price", "DESC"]];
      case "CREATED_DATE_ASC":
        return [["createdAt", "ASC"]];
      case "CREATED_DATE_DESC":
        return [["createdAt", "DESC"]];
      default:
        return [["name", "ASC"]];
    }
  }
};
