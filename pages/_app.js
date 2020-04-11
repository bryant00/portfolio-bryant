import React from 'react'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import Fonts from '../helpers/Fonts'
import auth0 from '../common/auth0'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'
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
    const { Component, pageProps, auth } = this.props
    const Layout = Component.Layout || Noop

    return (
      <>
        <DefaultSeo {...SEO} />
        <Layout>
          <ToastContainer />
          <Component {...pageProps} auth={auth} />
        </Layout>
      </>
    )
  }
}
