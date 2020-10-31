const faker = require("faker");

const CategoryService = require("../category-service");

describe("Category service", () => {
  describe("#categoryById", () => {
    test("should return a Promise", () => {
      const categoryDb = {
        categoryById: jest.fn().mockReturnValue(new Promise(() => {})),
      };
      const categoryService = new CategoryService({ categoryDb });
      const category = categoryService.categoryById(faker.random.number());

      expect(categoryDb.categoryById).toHaveBeenCalled();
      expect(category instanceof Promise).toBeTruthy();
    });
  });
});
