const helmet = require('helmet');

module.exports = app => {
  // Change the default CSP config: https://github.com/graphql/graphql-playground/issues/1283#issuecomment-703631091
  app.use(helmet({ contentSecurityPolicy: false }));
};
