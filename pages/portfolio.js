import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

const Portfolio = ({ data }) => {
  let portfolio = data

  return (
    <main className="cover">
      <div className="wrapper">
        <div className="base-page portfolio-page">
          <h1> {portfolio.title} </h1>
          <p> BODY: {portfolio.body} </p>
          <p> ID: {portfolio.id} </p>
        </div>
      </div>
    </main>
  )
}
Portfolio.Layout = BaseLayout
Portfolio.getInitialProps = async (portfolioId) => {
  const res = await fetch(`${process.env.NOW_URL}api/portfolios`)
  const json = await res.json()
  return { data: json }
}
export default withRouter(Portfolio)
