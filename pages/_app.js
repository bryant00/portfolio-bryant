import React from 'react'
import Router from 'next/router'
import { ToastContainer } from 'react-toastify'
// import { DefaultSeo } from 'next-seo'
// import SEO from '../next-seo.config'
import { Auth0Provider } from '../lib/auth0-spa'
// import { Auth0Provider } from '../lib/react-auth0-spa'
// import { ThemeContext, themes } from '../lib/themeContext'
import { MyHead } from '../components/shared/MyHead'
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

const Noop = ({ children }) => children
// const onRedirectCallback = (appState) => {
//   console.log('appState', appState)

//   Router.push(appState && appState.targetUrl ? appState.targetUrl : '/')
// }

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || Noop
  // let browserUri = undefined
  // React.useEffect(() => {
  //   // window is accessible here.
  //   browserUri = window.location.origin + '/callback'
  //   console.log(browserUri)
  // })

  return (
    <Auth0Provider
    // redirect_uri={browserUri}
    // onRedirectCallback={onRedirectCallback}
    >
      <MyHead />
      {/* <ToastContainer /> */}
      <Layout>
        <Component {...pageProps} router={router} />
      </Layout>
    </Auth0Provider>
  )
}
export default MyApp
