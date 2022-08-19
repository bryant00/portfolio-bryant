import { MongoClient, ObjectID } from 'mongodb'
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster = process.env.DB_CLUSTER;
const DB_NAME=process.env.DB_NAME;

let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const dbName = 'portfolios'

export default async ({ query: { id } }, res) => {
  try {
    const afterConnection = await client.connect()

    const db = await client.db(process.env.DB_NAME)

    const collection = await db.collection(dbName)

    // prettier-ignore
    const portfolio = await collection.findOne({ _id: ObjectID(id) })

    res.status(200).json(portfolio)
  } catch (err) {
    console.log(err)
  }
}
