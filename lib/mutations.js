const { create, update, deleteItem, findByid, updateRelation } = require('./db/queries')
const { STUDENT, COURSE } = require('./db/ENTITIES')

const studentCollection = STUDENT.collection
const courseCollection = COURSE.collection

module.exports = {
  createCourse: (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }
    return create({ input, defaults, collection: courseCollection })
  },
  createStudent: (root, { input }) => create({ input, collection: studentCollection }),
  editCourse: (root, { input, _id }) => update({ _id, input, collection: courseCollection }),
  deleteCourse: (root, { id }) => deleteItem({ id, collection: courseCollection }),
  editStudent: (root, { input, _id }) => update({ _id, input, collection: studentCollection }),
  deleteStudent: (root, { id }) => deleteItem({ id, collection: studentCollection }),
  addPeople: async (root, { courseID, personID }) => {
    const course = await findByid({ collection: courseCollection, id: courseID })
    const person = await findByid({ collection: studentCollection, id: personID })

    if (!course || !person) {
      throw new Error('La persona o el curso no existe')
    }
    await updateRelation({ collection: courseCollection, idBase: courseID, idToAdd: personID, field: 'people' })

    return findByid({ collection: courseCollection, id: courseID })
  }
}
