const faker = require("faker");

const ProductDb = require("../product-db");

describe("Product db", () => {
  describe("#products", () => {
    const Sequelize = {
      Op: {
        iLike: faker.random.word(),
      },
    };
    const Product = {
      findAll: jest.fn((condition) => condition),
    };
    const Category = {};
    const productDb = new ProductDb({ Product, Category, Sequelize });

    test("should query with pagination and order", () => {
      const page = faker.random.number();
      const perPage = faker.random.number();
      const order = faker.random.word();
      expect(productDb.products(page, perPage, order)).toStrictEqual({
        offset: (page - 1) * perPage,
        limit: perPage,
        order,
      });
      expect(Product.findAll).toHaveBeenCalled();
    });
    test("should query with pagination, order and category", () => {
      const page = faker.random.number();
      const perPage = faker.random.number();
      const order = faker.random.word();
      const categoryId = faker.random.number();
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
      const page = faker.random.number();
      const perPage = faker.random.number();
      const order = faker.random.word();
      const categoryId = faker.random.number();
      const nameTerm = faker.lorem.word();
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
