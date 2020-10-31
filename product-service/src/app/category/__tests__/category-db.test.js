const faker = require("faker");

const CategoryDb = require("../category-db");

describe("Category db", () => {
  describe("#categoryById", () => {
    const Category = {
      findOne: jest.fn((condition) => condition),
    };
    const categoryDb = new CategoryDb({ Category });

    test("should query by category id", () => {
      const id = faker.random.number();
      expect(categoryDb.categoryById(id)).toStrictEqual({
        where: {
          id,
        },
      });
      expect(Category.findOne).toHaveBeenCalled();
    });
  });
});
