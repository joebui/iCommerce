const {
  POSTGRES_HOST,
  POSTGRES_DB_NAME,
  POSTGRES_PASSWORD,
  POSTGRES_USERNAME,
} = process.env;

module.exports = {
  development: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB_NAME,
    host: POSTGRES_HOST,
    dialect: "postgres",
    define: {
      charset: "utf8",
    },
  },
};
