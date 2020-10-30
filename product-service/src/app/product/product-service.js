module.exports = class ProductService {
  constructor({ productDb }) {
    this.productDb = productDb;
  }

  getProducts(page, perPage, sortBy, categoryId) {
    return this.productDb.products(page, perPage, this.getDbOrderType(sortBy), categoryId);
  }

  getDbOrderType(sortBy) {
    switch (sortBy) {
      case 'PRICE_ASC':
        return [['price', 'ASC']]
      case 'PRICE_DESC':
        return [['price', 'DESC']]
      case 'CREATED_DATE_ASC':
        return [['createdAt', 'ASC']]
      case 'CREATED_DATE_DESC':
        return [['createdAt', 'DESC']]
      default:
        return [['createdAt', 'DESC']]
    }
  }
}
