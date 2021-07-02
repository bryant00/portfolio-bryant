import { MongoClient } from 'mongodb'

const uri = process.env.DB_URI

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
const client = new MongoClient(uri)

async function run(req, res) {
  try {
    await client.connect()
    const db = client.db('test').command({ ping: 1 })
    console.log('Connected successfully to server')
    const projects = db.collection('projects')
    const portfolioData = await projects.find({}).toArray()
    res.status(200).json(portfolioData)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
// run().catch(console.dir)

export default async (req, res) => {
  try {
    const afterConnection = await client.connect()

    const db = await client.db(process.env.DB_NAME)

    const collection = await db.collection('projects')

    const portfolioData = await collection.find({}).toArray()
    res.status(200).json(portfolioData)
  } catch (err) {
    console.log(err)
  }
}
