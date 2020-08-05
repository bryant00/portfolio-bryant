import { MongoClient } from 'mongodb'

// const uri = process.env.DB_URI

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const dbName = 'portfolios'

export default async (req, res) => {
  try {
    // const afterConnection = await client.connect()

    // const db = await client.db(process.env.DB_NAME)

    // const collection = await db.collection(dbName)

    // const portfolios = await collection.find({}).toArray()
    const portfolios = portfolioData
    res.status(200).json(portfolios)
  } catch (err) {
    console.log(err)
  }
}

const portfolioData = [
  {
    _id: '5ea8b0a8f2b85d283e9ece60',
    title: 'Net Giver Work Order Management App',
    company: 'Net Giver',
    description:
      'An app used to simplify work order utilization. Coordinating work orders among groups of people is difficult, from creating the list of tasks to prioritizing and assigning them. Digital task lists exist, but they do not connect the tasks at hand to objects in the physical world. Net Giver provides user ease for creating and editing work orders, all in one convenient app.',
    projectUrl: 'https://expo.io/@skylerwebdev/ngwom',
    githubUrl:
      'https://github.com/Lambda-School-Labs/net-giver-work-order-management-fe',
    imageName: 'netgiverapp.png',
    features: [
      'QR scanner',
      'Create, edit and assign work orders',
      'View all work orders in one convenient place',
      'Take pictures and upload images',
    ],
    tech: ['React Native', 'Postgres', 'GraphQL', 'Twilio Authy'],
  },
]
