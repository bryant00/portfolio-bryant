import { MongoClient, ObjectID } from 'mongodb'
import assert from 'assert'

const uri = process.env.DB_URI
const dbName = process.env.DB_NAME
const collectionName = 'porfolio'

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

export default async ({ query: { id } }, res) => {
  let client

  try {
    client = await MongoClient.connect(uri)

    const db = client.db(dbName)

    let r = await db.collection(collectionName).insertOne({ a: 1 })

    assert.equal(1, r.insertedCount)
  } catch (err) {
    console.log(err.stack)
  }

  client.close()
}
