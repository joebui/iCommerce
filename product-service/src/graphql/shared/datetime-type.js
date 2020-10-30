const { GraphQLScalarType } = require('graphql');
const moment = require('moment');

module.exports = new GraphQLScalarType({
  name: 'DateTime',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return moment(value).toISOString();
  },
});
