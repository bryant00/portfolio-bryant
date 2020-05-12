import React from 'react'
import Layout from '../../components/layouts/Layout'
import { Col, Row, Container, Button, CardDeck } from 'reactstrap'
import PortfolioCard from '../../components/portfolios/PortfolioCard'
import useSWR from 'swr'
import { useAuth0 } from '../../lib/auth0-spa'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const theme = {
    mainClass: '',
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
            {isAuthenticated && isOwner && (
              <Button outline size="lg" color="warning" type="submit">
                <Link href="/portfolio/new">
                  Create Portfolio
                  {/* <a className="create-port-btn">Create Portfolio</a> */}
                </Link>
              </Button>
            )}
          </div>

          <Row>
            <CardDeck>
              <Data></Data>
            </CardDeck>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

// export default PortfolioPage
