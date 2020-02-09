const mutations = require('./mutations')
const queries = require('./gqlQueries')
const types = require('./types')

module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types
}
