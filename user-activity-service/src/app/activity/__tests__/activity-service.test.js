const faker = require("faker");

const ActivityService = require("../activity-service");

describe("Activity service", () => {
  describe("#insertActivity", () => {
    const activityDb = {
      insertActivity: jest.fn((action, userAgent, queryParams, clientIp) => ({
        action,
        userAgent,
        queryParams,
        clientIp,
      })),
    };
    const activityService = new ActivityService({ activityDb });

    test("should create new activity record", () => {
      const action = faker.random.word();
      const userAgent = faker.random.objectElement();
      const queryParams = faker.random.objectElement();
      const clientIp = faker.random.word();
      const data = JSON.stringify({ action, userAgent, queryParams, clientIp });

      expect(activityService.insertActivity(data)).toStrictEqual({
        action,
        userAgent,
        queryParams,
        clientIp,
      });
      expect(activityDb.insertActivity).toHaveBeenCalled();
    });
  });
});
