import { MongoClient } from 'mongodb'

const uri = process.env.DB_URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default async (req, res) => {
  try {
    const afterConnection = await client.connect()
    // console.log("afterConnection", afterConnection)

    const db = await client.db(process.env.DB_NAME)
    // console.log("db", db)

    const collection = await db.collection('portfolios')
    // console.log("collection", collection)

    const portfolios = await collection
      .find({})
      // .project({ _id: 0, email: 1 })
      .toArray()
    // console.log("users", users);

    res.status(200).json(portfolios)
  } catch (err) {
    console.log(err)
  }
}

// import nextConnect from 'next-connect'
// import middleware from '../../middleware/database'
// // import { ObjectID } from 'mongodb'

// const handler = nextConnect()

// handler.use(middleware)

// handler.get(async (req, res) => {
//   let doc = await req.db.collection('portfolios').findOne()
//   //   console.log(doc)
//   res.json(doc)
// })

// handler.post(async (req, res) => {
//   let data = req.body
//   data = JSON.parse(data)
//   let doc = await req.db
//     .collection('portfolios')
//     .updateOne({ $set: data }, { upsert: true })

//   res.json({ message: 'ok' })
// })

// // export default handler
// export default (req, res) => handler.apply(req, res)
