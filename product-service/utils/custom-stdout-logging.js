const { createLogger, format, transports } = require('winston');

const { splat, simple, prettyPrint, timestamp } = format;

module.exports = createLogger({
  format: format.combine(
    timestamp(),
    splat(),
    simple(),
    prettyPrint(),
  ),
  transports: [new transports.Console()],
});
