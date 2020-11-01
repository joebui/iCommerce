const { createLogger, format, transports } = require("winston");

const { combine, splat, simple, prettyPrint, timestamp } = format;

module.exports = createLogger({
  format: combine(timestamp(), splat(), simple(), prettyPrint()),
  transports: [new transports.Console()],
});
