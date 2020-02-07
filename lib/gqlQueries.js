
const { getAll, findByid } = require('./db/queries')
module.exports = {
  getCourses: () => getAll({ collection: 'courses' }),
  getCourse: (root, { id }) => findByid({ id, collection: 'courses' }),
  getStudents: () => getAll({ collection: 'students' }),
  getStudent: (root, { id }) => findByid({ id, collection: 'students' })
}
