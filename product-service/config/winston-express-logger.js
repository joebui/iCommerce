const { format, transports } = require("winston");
const expressWinston = require("express-winston");

module.exports = (app) => {
  app.use(
    expressWinston.logger({
      transports: [new transports.Console()],
      format: format.combine(
        format.colorize(),
        format.splat(),
        format.simple()
      ),
      meta: true,
      expressFormat: true,
      colorize: true,
      statusLevels: true,
    })
  );
};
