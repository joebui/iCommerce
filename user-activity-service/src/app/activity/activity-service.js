module.exports = class ActivityService {
  constructor({ activityDb }) {
    this.activityDb = activityDb
  }

  insertActivity(data) {
    const { userAgent, queryParams } = JSON.parse(data);
    this.activityDb.insertActivity(userAgent, queryParams)
  }
}
