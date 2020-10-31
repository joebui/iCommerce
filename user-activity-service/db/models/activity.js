const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  activity.init(
    {
      action: DataTypes.STRING,
      userAgent: DataTypes.JSONB,
      queryParams: DataTypes.JSONB,
      clientIp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "activity",
    }
  );
  return activity;
};
