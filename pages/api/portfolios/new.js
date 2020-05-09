import { MongoClient, ObjectID } from 'mongodb'
import assert from 'assert'

const uri = process.env.DB_URI
const dbName = process.env.DB_NAME
const collectionName = 'portfolios'

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

export default async (req, res) => {
  let client

  try {
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const db = client.db(dbName)

    // if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    let r = await db.collection(collectionName).insertOne(body)
    assert.equal(1, r.insertedCount)
    // } else {
    //   let r = 'hi'
    // }

    res.status(200).json(r)
  } catch (err) {
    console.log(err.stack)
  }

  // client.close()
}
