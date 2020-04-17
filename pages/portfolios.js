import React, { useState, useEffect, useRef } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { Link } from '../routes'
import { Col, Row, Button } from 'reactstrap'
import PortfolioCard from '../components/portfolios/PortfolioCard'
import { useFetchUser } from '../lib/user'
import { Router } from '../routes'
import { server } from '../lib/server'

const PortfolioPage = ({ data }) => {
  const { user, loading } = useFetchUser()
  const { isSiteOwner } = true //user['https://portfolio-bryant.now.sh/role']
  const [portfolios, setPortfolios] = useState([data])

  function navigateToEdit(portfolioId, e) {
    e.stopPropagation()
    Router.pushRoute(`/portfolios/${portfolioId}/edit`)
  }

  function deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute('/portfolios')
      })
      .catch((err) => console.error(err))
  }

  function displayDeleteWarning(portfolioId, e) {
    e.stopPropagation()
    const isConfirm = confirm(
      'Are you sure you want to delete this portfolio???'
    )
    if (isConfirm) {
      deletePortfolio(portfolioId)
    }
  }

  function renderPortfolios(portfolios) {
    return portfolios.map((portfolio, index) => {
      return (
        <Col key={index} md="4">
          <PortfolioCard portfolio={portfolio}>
            {user && isSiteOwner && (
              <React.Fragment>
                <Button
                  onClick={(e) => this.navigateToEdit(portfolio._id, e)}
                  color="warning"
                >
                  Edit
                </Button>{' '}
                <Button
                  onClick={(e) => this.displayDeleteWarning(portfolio._id, e)}
                  color="danger"
                >
                  Delete
                </Button>
              </React.Fragment>
            )}
          </PortfolioCard>
        </Col>
      )
    })
  }

  if (loading) {
    return (
      <BaseLayout>
        <p>Loading...</p>
      </BaseLayout>
    )
  }
  return (
    <main className="cover">
      <div className="wrapper">
        <div className="base-page portfolio-page">
          {user && isSiteOwner && (
            <Button
              onClick={() => Router.pushRoute('/portfolios/new')}
              color="success"
              className="create-port-btn"
            >
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
  const res = await fetch(`${server}/api/portfolios`)
  const json = await res.json()
  return { data: json }
}
export default PortfolioPage
