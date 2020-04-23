import React, { useState, useEffect, useRef } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { Col, Row, Button } from 'reactstrap'
import PortfolioCard from '../components/portfolios/PortfolioCard'
import { useAuth0 } from '../lib/auth0-spa'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

const PortfolioPage = () => {
  const { user, loading, isAuthenticated } = useAuth0()

  const Data = () => {
    const { data, error } = useSWR('/api/portfolios', fetcher)

    if (error) {
      console.log(error)
      return <div>Failed to load</div>
    }
    if (!data) return <div>Loading...</div>

    const list = data.map((portfolio, index) => (
      <Col key={index} md="4">
        <PortfolioCard portfolio={portfolio}></PortfolioCard>
      </Col>
    ))

    return list
  }

  return (
    <main className="cover">
      <div className="wrapper">
        <div className="base-page portfolio-page">
          <Row>
            <Data></Data>
          </Row>
        </div>
      </div>
    </main>
  )
}
PortfolioPage.Layout = BaseLayout
export default PortfolioPage
