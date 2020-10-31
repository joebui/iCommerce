const { createContainer, asClass, asValue } = require("awilix");

const db = require("../../../db/models");
const ActivityService = require("./activity-service");
const ActivityDb = require("./activity-db");

const container = createContainer();
container.register({
  Activity: asValue(db.activity),
  activityService: asClass(ActivityService).singleton(),
  activityDb: asClass(ActivityDb).singleton(),
});

module.exports = container;
