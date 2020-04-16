import React from 'react'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import Fonts from '../helpers/Fonts'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Head from 'next/head'
// Stylings
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'

const Noop = ({ children }) => children

function MyApp({ Component, pageProps }) {
  // const user = process.browser
  // const isSiteOwner =
  //   user && user[process.env.NAMESPACE + '/role'] === 'siteOwner'
  // const auth = {
  //   user,
  //   isAuthenticated: !!user,
  //   isSiteOwner,
  // }
  const Layout = Component.Layout || Noop
  const title = 'Bryant Patton Portfolio'
  const headerType = 'default'
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <ToastContainer />
      <Layout>
        <Component
          {...pageProps}
          //auth={auth}
        />
      </Layout>
    </>
  )
}
export default MyApp
