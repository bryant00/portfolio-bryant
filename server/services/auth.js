const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const config = require('../../common/config')

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: `${config.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: config.AUTH0_CLIENT_ID,
  issuer: config.AUTH0_DOMAIN,
  algorithms: ['RS256'],
})

exports.checkRole = (role) => (req, res, next) => {
  const user = req.user

  if (
    user &&
    user[config.NAMESPACE + '/role'] &&
    user[config.NAMESPACE + '/role'] === role
  ) {
    next()
  } else {
    return res.status(401).send({
      title: 'Not Authorized',
      detail: 'You are not authorized to access this data',
    })
  }
}
