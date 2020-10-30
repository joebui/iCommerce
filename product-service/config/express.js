const helmet = require("helmet");
const useragent = require('express-useragent');

module.exports = (app) => {
  app.use(useragent.express());
  // Change the default CSP config: https://github.com/graphql/graphql-playground/issues/1283#issuecomment-703631091
  app.use(helmet({ contentSecurityPolicy: false }));
};
