module.exports = class ActivityDb {
  constructor({ Activity }) {
    this.Activity = Activity;
  }

  insertActivity(userAgent, queryParams, clientIp) {
    return this.Activity.create({ userAgent, queryParams, clientIp });
  }
};
