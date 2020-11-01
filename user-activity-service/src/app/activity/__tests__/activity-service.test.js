const { random } = require("faker");

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
      const action = random.word();
      const userAgent = random.objectElement();
      const queryParams = random.objectElement();
      const clientIp = random.word();
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
