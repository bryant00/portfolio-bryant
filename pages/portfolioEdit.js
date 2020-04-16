import React, { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm'
import { Row, Col } from 'reactstrap'
// import { updatePortfolio, getPortfolioById } from '../actions'

import { Router } from '../routes'

const PortfolioEdit = ({ data }) => {
  const portfolio = data
  const [error, setError] = useState(undefined)

  function updatePortfolio(portfolioData, { setSubmitting }) {
    setSubmitting(true)

    updatePortfolio(portfolioData)
      .then((portfolio) => {
        setSubmitting(false)
        Router.pushRoute('/portfolios')
      })
      .catch((err) => {
        const error = err.message || 'Server Error!'
        setSubmitting(false)
        setError({ error })
      })
  }

  return (
    <main className="cover">
      <div className="wrapper">
        <div className="base-page portfolio-create-page">
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                initialValues={portfolio}
                error={error}
                onSubmit={updatePortfolio}
              />
            </Col>
          </Row>
        </div>
      </div>
    </main>
  )
}

PortfolioEdit.Layout = BaseLayout
PortfolioEdit.getInitialProps = async (portfolioId) => {
  const res = await fetch(
    `${process.env.POST_LOGOUT_REDIRECT_URI}api/portfolios`
  )
  const json = await res.json()
  return { data: json }
}

export default PortfolioEdit
