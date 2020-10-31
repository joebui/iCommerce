const { format, transports } = require("winston");
const expressWinston = require("express-winston");

const { combine, timestamp, splat, simple, prettyPrint } = format;

module.exports = (app) => {
  app.use(
    expressWinston.errorLogger({
      transports: [new transports.Console()],
      format: combine(timestamp(), splat(), simple(), prettyPrint()),
      dumpExceptions: true,
      showStack: true,
    })
  );
};
