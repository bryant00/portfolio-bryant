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

    const db = await client.db(process.env.DB_NAME)

    const collection = await db.collection(dbName)

    const portfolios = await collection.find({}).toArray()
    res.status(200).json(portfolios)
  } catch (err) {
    console.log(err)
  }
}
