const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-bryant.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-bryant.herokuapp.com',
  'process.env.CLIENT_ID': 'NN4U9SfvteIISTjxY61LxdD2QJns6kA5'
}