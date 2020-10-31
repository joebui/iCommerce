const faker = require("faker");

const ActivityService = require("../activity-service");

describe("Activity service", () => {
  describe("#insertActivity", () => {
    const activityDb = {
      insertActivity: jest.fn((userAgent, queryParams, clientIp) => ({
        userAgent,
        queryParams,
        clientIp,
      })),
    };
    const activityService = new ActivityService({ activityDb });

    test("should create new activity record", () => {
      const userAgent = faker.random.objectElement();
      const queryParams = faker.random.objectElement();
      const clientIp = faker.random.word();
      const data = JSON.stringify({ userAgent, queryParams, clientIp });

      expect(activityService.insertActivity(data)).toStrictEqual({
        userAgent,
        queryParams,
        clientIp,
      });
      expect(activityDb.insertActivity).toHaveBeenCalled();
    });
  });
});
