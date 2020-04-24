import React from 'react'
import Router from 'next/router'
import { ToastContainer } from 'react-toastify'
import { Auth0Provider } from '../lib/auth0-spa'
import NProgress from 'nprogress'
// Stylings
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, router }) {
  return (
    <Auth0Provider>
      {/* <ToastContainer /> */}
      <Component {...pageProps} router={router} />
    </Auth0Provider>
  )
}
export default MyApp
