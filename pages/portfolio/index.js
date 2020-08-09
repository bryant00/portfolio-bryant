import React from 'react'
import Layout from '../../components/layouts/Layout'
import PortfolioCard from '../../components/portfolios/PortfolioCard'
import useSWR from 'swr'
import { useAuth0 } from '../../lib/auth0-spa'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const theme = {
    navClass: 'default',
    title: 'Bryant Patton - Porfolio',
  }
  const { isAuthenticated, isOwner, logout, user } = useAuth0()

  const Data = () => {
    const { data, error } = useSWR('/api/portfolios', fetcher)

    if (error) {
      console.log(error)
      return <div>Failed to load</div>
    }
    if (!data) return <div>Loading...</div>

    const list = data.map((portfolio, index) => (
      <PortfolioCard key={index} portfolio={portfolio}></PortfolioCard>
    ))

    return list
  }

  return (
    <Layout theme={theme}>
      <div className="base-page portfolio-page  bg-dark">
        <div className="jumbotron bg-dark">
          <div className="container">
            <h1 className="display-3">Porfolio</h1>
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 justify-content-center">
            <Data></Data>
          </div>
        </div>
      </div>
    </Layout>
  )
}
