const dotenv = require('dotenv')
module.exports = {
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ['bryantpatton-images.s3.us-west-1.amazonaws.com'],
  },
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    NAMESPACE: process.env.NAMESPACE,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    REDIRECT_URI: process.env.REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_CLUSTER: process.env.DB_CLUSTER,
    DB_NAME: process.env.DB_NAME,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
}
