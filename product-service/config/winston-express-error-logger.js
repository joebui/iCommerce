const { format, transports } = require("winston");
const expressWinston = require("express-winston");

module.exports = (app) => {
  app.use(
    expressWinston.errorLogger({
      transports: [new transports.Console()],
      format: format.combine(
        format.timestamp(),
        format.splat(),
        format.simple(),
        format.prettyPrint(),
      ),
      dumpExceptions: true,
      showStack: true,
    })
  );
};
