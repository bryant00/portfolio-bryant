const dotenv = require('dotenv')
const withImages = require('next-images')
dotenv.config()
const WorkerPlugin = require('worker-plugin')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const myenv = {
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    REDIRECT_URI: process.env.REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
  },
}

// module.exports = withImages({
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     if (!isServer) {
//       config.plugins.push(
//         new WorkerPlugin({
//           globalObject: 'self',
//         })
//       )
//     }
//     return config
//   },
//   env: myenv.env,
// })

const nextConfig = {
  webpack(config, options) {
    return config
  },
  env: myenv.env,
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        // urlPattern: /^https?.*/,
        urlPattern: /^http?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'http-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withPlugins([withImages, withOffline], nextConfig)
