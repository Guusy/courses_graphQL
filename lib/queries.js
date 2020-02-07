const connectDb = require('./db')
const { ObjectID } = require('mongodb')
module.exports = {
  getCourses: async () => {
    let courses = []
    try {
      const db = await connectDb()
      courses = await db.collection('courses').find().toArray()
    } catch (error) {
      console.error(error)
    }
    return courses
  },
  getCourse: async (root, { id }) => {
    let course = {}
    try {
      const db = await connectDb()
      course = await db.collection('courses').findOne({ _id: ObjectID(id) })
    } catch (error) {
      console.error(error)
    }
    return course
  }
}
