const { create, update, deleteItem } = require('./db/queries')

module.exports = {
  createCourse: (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }
    return create({ input, defaults, collection: 'courses' })
  },
  createStudent: (root, { input }) => create({ input, collection: 'students' }),
  editCourse: (root, { input, _id }) => update({ _id, input, collection: 'courses' }),
  deleteCourse: (root, { id }) => deleteItem({ id, collection: 'courses' }),
  editStudent: (root, { input, _id }) => update({ _id, input, collection: 'students' }),
  deleteStudent: (root, { id }) => deleteItem({ id, collection: 'students' })
}
