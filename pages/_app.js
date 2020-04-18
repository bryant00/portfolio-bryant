import React, { useState, useEffect, useContext } from 'react'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import Fonts from '../helpers/Fonts'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Head from 'next/head'
import { ThemeContext, themes } from '../lib/themeContext'
import { UserProvider, useFetchUser } from '../lib//user.js'
// Stylings
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'

const Noop = ({ children }) => children

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  const title = 'Bryant Patton Portfolio'
  const headerType = 'default'
  const { user, loading, owner } = useFetchUser()
  return (
    <UserProvider value={{ user, loading, owner }}>
      {/* <DefaultSeo {...SEO} /> */}
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
      <ThemeContext.Provider value={themes}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </UserProvider>
  )
}
export default MyApp
