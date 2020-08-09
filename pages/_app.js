import React from 'react'
import Router from 'next/router'
import { Auth0Provider } from '../lib/auth0-spa'
import NProgress from 'nprogress'
// import whyDidYouRender from '@welldone-software/why-did-you-render'

import '../styles/main.scss'

// if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
//   whyDidYouRender(React)
// }

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, router }) {
  return (
    <Auth0Provider>
      <Component {...pageProps} router={router} />
    </Auth0Provider>
  )
}
export default MyApp
