import React from 'react'
import Layout from '../components/layouts/Layout'
import { Col, Row, Container } from 'reactstrap'
import PortfolioCard from '../components/portfolios/PortfolioCard'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const PortfolioPage = () => {
  const theme = {
    mainClass: '',
    navClass: 'default',
    title: 'Bryant Patton - Porfolio',
  }

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
    <Layout theme={theme}>
      <div className="base-page portfolio-page">
        <Container>
          <div className="page-header">
            <h1 className="page-header-title">Porfolio</h1>
          </div>
          <Row>
            <Data></Data>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default PortfolioPage
