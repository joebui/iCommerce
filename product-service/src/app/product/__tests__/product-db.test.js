const { random, lorem } = require("faker");

const ProductDb = require("../product-db");

describe("Product db", () => {
  describe("#products", () => {
    const Sequelize = {
      Op: {
        iLike: random.word(),
      },
    };
    const Product = {
      findAll: jest.fn((condition) => condition),
    };
    const Category = {};
    const productDb = new ProductDb({ Product, Category, Sequelize });

    test("should query with pagination and order", () => {
      const page = random.number();
      const perPage = random.number();
      const order = random.word();
      expect(productDb.products(page, perPage, order)).toStrictEqual({
        offset: (page - 1) * perPage,
        limit: perPage,
        order,
      });
      expect(Product.findAll).toHaveBeenCalled();
    });
    test("should query with pagination, order and category", () => {
      const page = random.number();
      const perPage = random.number();
      const order = random.word();
      const categoryId = random.number();
      expect(
        productDb.products(page, perPage, order, categoryId)
      ).toStrictEqual({
        offset: (page - 1) * perPage,
        limit: perPage,
        order,
        include: {
          model: Category,
          where: {
            id: categoryId,
          },
        },
      });
    });
    test("should query with pagination, order, category and name term", () => {
      const page = random.number();
      const perPage = random.number();
      const order = random.word();
      const categoryId = random.number();
      const nameTerm = lorem.word();
      expect(
        productDb.products(page, perPage, order, categoryId, nameTerm)
      ).toStrictEqual({
        offset: (page - 1) * perPage,
        limit: perPage,
        order,
        where: {
          name: {
            [Sequelize.Op.iLike]: `%${nameTerm}%`,
          },
        },
        include: {
          model: Category,
          where: {
            id: categoryId,
          },
        },
      });
    });
  });
});
