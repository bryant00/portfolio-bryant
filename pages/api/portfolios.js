import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
// import { ObjectID } from 'mongodb'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  let doc = await req.db.collection('portfolios').findOne()
  //   console.log(doc)
  res.json(doc)
})

handler.post(async (req, res) => {
  let data = req.body
  data = JSON.parse(data)
  let doc = await req.db
    .collection('portfolios')
    .updateOne({ $set: data }, { upsert: true })

  res.json({ message: 'ok' })
})

// export default handler
export default (req, res) => handler.apply(req, res)
