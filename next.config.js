const dotEnvResult = require('dotenv').config()
const prod = process.env.NODE_ENV === 'production'
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

if (dotEnvResult.error) {
  throw dotEnvResult.error
}
// console.log(dotEnvResult.parsed)

const nextConfig = {
  //   target: 'serverless',
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
    DB_URI: process.env.DB_URI,
    NAMESPACE: process.env.NAMESPACE,
    NOW_URL: process.env.NOW_URL,
  },
  // webpack: (config, { dev, isServer }) => {
  //     if (isServer) {
  //         return config
  //     }
  //     var isProduction = config.mode === "production"
  //     if (!isProduction) {
  //         return config
  //     }
  //     config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
  //     return config
  // },
}

module.exports = withPlugins([[withSass], [withCSS]], nextConfig)

// module.exports = withPlugins([withCSS, withSass], nextConfig)

// module.exports = withCSS(withSass({
//   webpack(config, {dev}) {
//     if (config.mode === 'production') {
//       if (Array.isArray(config.optimization.minimizer)) {
//         config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
//       }
//     }
//     return config;
//   }
// }));
