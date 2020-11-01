const { random } = require("faker");

const ActivityDb = require("../activity-db");

describe("Activity db", () => {
  describe("#insertActivity", () => {
    const Activity = {
      create: jest.fn((condition) => condition),
    };
    const activityDb = new ActivityDb({ Activity });

    test("should create new activity record", () => {
      const action = random.word();
      const userAgent = random.objectElement();
      const queryParams = random.objectElement();
      const clientIp = random.word();

      expect(
        activityDb.insertActivity(action, userAgent, queryParams, clientIp)
      ).toStrictEqual({ action, userAgent, queryParams, clientIp });
      expect(Activity.create).toHaveBeenCalled();
    });
  });
});
