const { findByids } = require('./db/queries')
const { STUDENT } = require('./db/ENTITIES')

module.exports = {
  Course: {
    people: ({ people }) => {
      if (people) {
        return findByids({ collection: STUDENT.collection, ids: people })
      } else {
        return []
      }
    }
  }
}
