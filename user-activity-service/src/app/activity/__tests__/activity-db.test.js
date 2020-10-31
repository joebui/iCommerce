const faker = require("faker");

const ActivityDb = require("../activity-db");

describe("Activity db", () => {
  describe("#insertActivity", () => {
    const Activity = {
      create: jest.fn((condition) => condition),
    };
    const activityDb = new ActivityDb({ Activity });

    test("should create new activity record", () => {
      const userAgent = faker.random.objectElement();
      const queryParams = faker.random.objectElement();
      const clientIp = faker.random.word();
      
      expect(activityDb.insertActivity(userAgent, queryParams, clientIp)).toStrictEqual({ userAgent, queryParams, clientIp });
      expect(Activity.create).toHaveBeenCalled();
    });
  });
});
