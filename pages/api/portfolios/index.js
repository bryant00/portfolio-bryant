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
    _id: '1',
    title: 'Net Giver Work Order Management App',
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
  {
    _id: '2',
    title: 'NBA Player Career Longevity Predictor',
    description:
      'Website that predicts how many years we can expect an NBA players carreer to last. ',
    projectUrl: 'https://client.nba-longevity.now.sh/',
    githubUrl: 'https://github.com/build-week-longevity-predictor/client',
    imageName: 'nba_narrow.png',
    features: [
      'Model using 10 years of NBA player data',
      'Search for current and past NBA players',
      'Save your favorite players',
    ],
    tech: ['Node Express', 'React', 'Python'],
  },
  {
    _id: '3',
    title: 'Immunizations Tracking App',
    description: 'Immunization History In Your Pocket.',
    projectUrl: 'https://csb-1wvix.bryantpatton.now.sh/',
    githubUrl: 'https://github.com/bryant00/Drs-Login-App',
    imageName: 'immunizations.png',
    features: [
      'Imunizations central repositories',
      'Doctors safely track clients record history',
      'Save and share data',
    ],
    tech: ['Node Express', 'React', 'Postgres'],
  },
]
