import { MongoClient } from 'mongodb'

const uri = process.env.DB_URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const dbName = 'portfolios'

export default async (req, res) => {
  try {
    const afterConnection = await client.connect()
    // console.log("afterConnection", afterConnection)

    const db = await client.db(process.env.DB_NAME)
    // console.log("db", db)

    const collection = await db.collection(dbName)
    // console.log("collection", collection)

    const portfolios = await collection
      .find({})
      // .project({ _id: 0, email: 1 })
      .toArray()
    // console.log("users", users);
    // client.close()
    res.status(200).json(portfolios)
  } catch (err) {
    console.log(err)
  }
}
