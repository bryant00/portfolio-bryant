import { MongoClient, ObjectID } from 'mongodb'

const uri = process.env.DB_URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const dbName = 'portfolios'

export default async ({ query: { id } }, res) => {
  try {
    const afterConnection = await client.connect()
    // console.log("afterConnection", afterConnection)

    const db = await client.db(process.env.DB_NAME)

    const collection = await db.collection(dbName)

    // prettier-ignore
    const portfolio = await collection.findOne({ _id: ObjectID(id) })

    res.status(200).json(portfolio)
  } catch (err) {
    console.log(err)
  }
}
