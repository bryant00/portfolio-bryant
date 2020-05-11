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
    const body = JSON.parse(req.body)
    const id = body.id
    let r
    if (req.method === 'DELETE') {
      r = await db.collection(collectionName).deleteOne({ _id: ObjectID(id) })
    } else {
      const data = body.data
      r = await db
        .collection(collectionName)
        .updateOne({ _id: ObjectID(id) }, { $set: data })
    }
    console.dir(r)
    res.status(200).json(r)
  } catch (err) {
    console.log(err.stack)
  }

  // client.close()
}
