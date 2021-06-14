const dotenv = require('dotenv')
dotenv.config()
module.exports = () => {
  const env= {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    REDIRECT_URI: process.env.REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
  }
  return {
    env,
  }
} 
