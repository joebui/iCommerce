module.exports = class ActivityService {
  constructor({ activityDb }) {
    this.activityDb = activityDb;
  }

  insertActivity(data) {
    const { userAgent, queryParams, clientIp } = JSON.parse(data);
    return this.activityDb.insertActivity(userAgent, queryParams, clientIp);
  }
};
