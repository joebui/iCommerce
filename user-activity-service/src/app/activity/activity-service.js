module.exports = class ActivityService {
  constructor({ activityDb }) {
    this.activityDb = activityDb;
  }

  insertActivity(data) {
    const { action, userAgent, queryParams, clientIp } = JSON.parse(data);
    return this.activityDb.insertActivity(
      action,
      userAgent,
      queryParams,
      clientIp
    );
  }
};
