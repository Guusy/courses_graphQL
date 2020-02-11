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
  },
  Person: {
    __resolveType: (person, context, info) => {
      if (person.phone) {
        return 'Monitor'
      }
      return 'Student'
    }
  }
}
