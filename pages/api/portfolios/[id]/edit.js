import { MongoClient, ObjectID } from 'mongodb'
import assert from 'assert'

const uri = process.env.DB_URI

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const dbName = 'portfolios'

export default async ({ query: { id } }, res) => {
  let client

  try {
    client = await MongoClient.connect(uri)

    const db = client.db(dbName)
  } catch (err) {
    console.log(err.stack)
  }

  client.close()
}
