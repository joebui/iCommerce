module.exports = class ActivityDb {
  constructor({ Activity }) {
    this.Activity = Activity
  }

  insertActivity(userAgent, queryParams) {
    this.Activity.create({ userAgent, queryParams })
  }
}
