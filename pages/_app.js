import React, { useContext } from 'react'
import Router from 'next/router'
import { Auth0Provider } from '../lib/auth0-spa'
import NProgress from 'nprogress'
import * as gtag from '../lib/gtag'
// import whyDidYouRender from '@welldone-software/why-did-you-render'
import { IconsContext, icons } from '../lib/iconsContext'

import '../styles/main.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
//   whyDidYouRender(React)
// }
const handleRouteChange = (url) => {
  gtag.pageview(url)
}

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', (url) => {
  handleRouteChange(url)
  NProgress.done()
})
Router.events.off('routeChangeComplete', (url) => {
  handleRouteChange(url)
})
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, router }) {
  return (
    <Auth0Provider>
      <IconsContext.Provider value={icons}>
        <Component {...pageProps} router={router} />
      </IconsContext.Provider>
    </Auth0Provider>
  )
}
export default MyApp
