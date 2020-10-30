const { createLogger, format, transports } = require("winston");

module.exports = createLogger({
  format: format.combine(format.splat(), format.simple(), format.prettyPrint()),
  transports: [new transports.Console()],
});
