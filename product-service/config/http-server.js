const http = require("http");

module.exports = (app) => {
  const server = http.Server(app);
  server.listen(process.env.EXPRESS_PORT, "0.0.0.0", () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${process.env.EXPRESS_PORT}`);
  });
};
