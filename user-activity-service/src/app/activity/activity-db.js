module.exports = class ActivityDb {
  constructor({ Activity }) {
    this.Activity = Activity;
  }

  insertActivity(action, userAgent, queryParams, clientIp) {
    return this.Activity.create({ action, userAgent, queryParams, clientIp });
  }
};
