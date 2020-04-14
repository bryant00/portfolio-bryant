import React from 'react'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import Fonts from '../helpers/Fonts'
import auth0 from '../common/auth0'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Head from 'next/head'
// Stylings
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'
import { useFetchUser } from '../lib/user'

const Noop = ({ children }) => children

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    const user = process.browser
      ? await auth0.clientAuth()
      : await auth0.serverAuth(ctx.req)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const isSiteOwner =
      user && user[process.env.NAMESPACE + '/role'] === 'siteOwner'
    const auth = { user, isAuthenticated: !!user, isSiteOwner }

    return { pageProps, auth }
  }

  componentDidMount() {
    // Fonts();
  }

  render() {
    const {
      Component,
      pageProps,
      auth,
      className,
      isAuthenticated,
      user,
      isSiteOwner,
      children,
    } = this.props
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
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
        </Head>

        <ToastContainer />
        <Layout>
          <Component {...pageProps} auth={auth} />
        </Layout>
      </>
    )
  }
}
