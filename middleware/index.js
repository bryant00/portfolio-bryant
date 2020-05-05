import { MongoClient } from 'mongodb'
const MONGODB_URI = process.env.DB_URI // or Atlas connection string

let cachedDb = null

function connectToDatabase(uri) {
  console.log('=> connect to database')

  if (cachedDb) {
    console.log('=> using cached database instance')

    return Promise.resolve(cachedDb)
  }

  return MongoClient.connect(uri).then((db) => {
    cachedDb = db

    return cachedDb
  })
}

function queryDatabase(db) {
  console.log('=> query database')

  return db
    .collection('portfolios')
    .find({})
    .toArray()
    .then((res) => {
      //   return { statusCode: 200, body: 'success' }
      return { statusCode: 200, body: JSON(res) }
    })
    .catch((err) => {
      console.log('=> an error occurred: ', err)
      return { statusCode: 500, body: 'error' }
    })
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  console.log('event: ', event)

  connectToDatabase(MONGODB_URI)
    .then((db) => queryDatabase(db))
    .then((result) => {
      console.log('=> returning result: ', result)
      callback(null, result)
    })
    .catch((err) => {
      console.log('=> an error occurred: ', err)
      callback(err)
    })
}
