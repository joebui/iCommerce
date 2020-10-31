module.exports = class ActivityDb {
  constructor({ Activity }) {
    this.Activity = Activity
  }

  insertActivity(userAgent, queryParams, clientIp) {
    this.Activity.create({ userAgent, queryParams, clientIp })
  }
}
