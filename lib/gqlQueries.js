
const { getAll, findByid, globalSearch } = require('./db/queries')
module.exports = {
  getCourses: () => getAll({ collection: 'courses' }),
  getCourse: (root, { id }) => findByid({ id, collection: 'courses' }),
  getPeople: () => getAll({ collection: 'students' }),
  getPerson: (root, { id }) => findByid({ id, collection: 'students' }),
  searchItems: (root, { keyword }) => globalSearch({ keyword })
}
