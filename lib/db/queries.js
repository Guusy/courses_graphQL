const connectDb = require('./connect')
const { ObjectID } = require('mongodb')

const findByid = async ({ id, collection }) => {
  let item = {}
  try {
    const db = await connectDb()
    item = await db.collection(collection).findOne({ _id: ObjectID(id) })
  } catch (error) {
    console.error(error)
  }
  return item
}

const getAll = async ({ collection }) => {
  let items = []
  try {
    const db = await connectDb()
    items = await db.collection(collection).find().toArray()
  } catch (error) {
    console.error(error)
  }
  return items
}

const create = async ({ collection, defaults = {}, input }) => {
  const newItem = Object.assign(defaults, input)
  try {
    const db = await connectDb()
    const item = await db.collection(collection).insertOne(input)
    newItem._id = item.insertedId
  } catch (error) {
    console.error(error)
  }
  return newItem
}

const update = async ({ _id, input, collection }) => {
  let itemUpdated
  try {
    const db = await connectDb()
    await db.collection(collection)
      .updateOne({ _id: ObjectID(_id) }, { $set: input })
    itemUpdated = await findByid({ collection, id: _id })
  } catch (error) {
    console.error(error)
  }
  return itemUpdated
}

const deleteItem = async ({ id, collection }) => {
  let message = `Item with id ${id} is not in the collection ${collection}`
  let deleted
  try {
    const db = await connectDb()
    deleted = await db.collection(collection).deleteOne({ _id: ObjectID(id) })
  } catch (error) {
    console.error(error)
  }
  if (deleted.deletedCount) {
    message = `successfully removed the id ${id}`
  }
  return message
}

module.exports = {
  findByid,
  getAll,
  update,
  create,
  deleteItem
}
