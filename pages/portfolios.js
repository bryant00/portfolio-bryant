import React, { useState, useEffect, useRef } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { Col, Row, Button } from 'reactstrap'
import PortfolioCard from '../components/portfolios/PortfolioCard'
import { useAuth0 } from '../lib/auth0-spa'

const PortfolioPage = ({ data }) => {
  const { user, loading, isAuthenticated } = useAuth0()
  const [portfolios, setPortfolios] = useState([data])

  function renderPortfolios(portfolios) {
    return portfolios.map((portfolio, index) => {
      return (
        <Col key={index} md="4">
          <PortfolioCard portfolio={portfolio}>
            {user && isAuthenticated && (
              <React.Fragment>
                <Button color="warning">Edit</Button>{' '}
                <Button color="danger">Delete</Button>
              </React.Fragment>
            )}
          </PortfolioCard>
        </Col>
      )
    })
  }

  return (
    <main className="cover">
      <div className="wrapper">
        <div className="base-page portfolio-page">
          {user && owner && (
            <Button color="success" className="create-port-btn">
              Create Portfolio
            </Button>
          )}
          <Row>{renderPortfolios(portfolios)}</Row>
        </div>
      </div>
    </main>
  )
}
PortfolioPage.Layout = BaseLayout
PortfolioPage.getInitialProps = async () => {
  const res = await fetch(`https://u76xn.sse.codesandbox.io/api/portfolios`)
  const json = await res.json()
  return { data: json }
}
export default PortfolioPage
