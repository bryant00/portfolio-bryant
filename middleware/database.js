import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'
const assert = require('assert')

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const dbName = 'test'
async function database(req, res, next) {
  if (!client.isConnected()) await client.connect()
  console.log('Connected successfully to server')
  req.dbClient = client
  req.db = client.db(dbName)
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
