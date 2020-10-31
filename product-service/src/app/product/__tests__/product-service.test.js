const faker = require("faker");

const ProductService = require("../product-service");

describe("Product service", () => {
  const USER_ACTIVITY = faker.random.word();

  describe("#products", () => {
    test("should return a Promise", () => {
      const productDb = {
        products: jest.fn().mockReturnValue(new Promise(() => {})),
      };
      const amqp = {};
      const logger = {};
      const productService = new ProductService({
        productDb,
        amqp,
        logger,
        USER_ACTIVITY,
      });
      const products = productService.products();

      expect(productDb.products).toHaveBeenCalled();
      expect(products instanceof Promise).toBeTruthy();
    });
  });

  describe("#getDbOrderType", () => {
    test("should return name (ascending) sort mode", () => {
      expect(ProductService.getDbOrderType("NAME_ASC")).toStrictEqual([
        ["name", "ASC"],
      ]);
    });
    test("should return name (descending) sort mode", () => {
      expect(ProductService.getDbOrderType("NAME_DESC")).toStrictEqual([
        ["name", "DESC"],
      ]);
    });
    test("should return price (ascending) sort mode", () => {
      expect(ProductService.getDbOrderType("PRICE_ASC")).toStrictEqual([
        ["price", "ASC"],
      ]);
    });
    test("should return price (descending) sort mode", () => {
      expect(ProductService.getDbOrderType("PRICE_DESC")).toStrictEqual([
        ["price", "DESC"],
      ]);
    });
    test("should return created date (ascending) sort mode", () => {
      expect(ProductService.getDbOrderType("CREATED_DATE_ASC")).toStrictEqual([
        ["createdAt", "ASC"],
      ]);
    });
    test("should return created date (descending) sort mode", () => {
      expect(ProductService.getDbOrderType("CREATED_DATE_DESC")).toStrictEqual([
        ["createdAt", "DESC"],
      ]);
    });
    test("should return name (ascending) sort mode by default", () => {
      expect(ProductService.getDbOrderType(faker.lorem.word())).toStrictEqual([
        ["name", "ASC"],
      ]);
    });
  });

  describe("#handleActivityPublishError", () => {
    const productDb = {};
    const amqp = {};
    const logger = {
      error: jest.fn(),
    };
    const productService = new ProductService({
      productDb,
      amqp,
      logger,
      USER_ACTIVITY,
    });

    test("should throw and log error", () => {
      expect(() => {
        productService.handleActivityPublishError(faker.lorem.word());
      }).toThrow();
      expect(logger.error).toHaveBeenCalled();
    });
  });
});
