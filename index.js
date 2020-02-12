'use strict'
require('dotenv').config()

const { makeExecutableSchema } = require('graphql-tools')

const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const isDev = process.env.NODE_ENV !== 'production'
// initial schema

const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)
const schema = makeExecutableSchema(
  {
    typeDefs,
    resolvers
  }
)

app.use(cors())

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => {
  console.log('Server is listening at', port)
})
