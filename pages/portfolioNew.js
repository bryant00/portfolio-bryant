import React, { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm'
import { Row, Col } from 'reactstrap'
import { createPortfolio } from '../actions'
import { Router } from '../routes'
import moment from 'moment'

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: moment(),
  endDate: moment(),
}

const PortfolioNew = () => {
  const [error, setError] = useState(undefined)

  function savePortfolio(portfolioData, { setSubmitting }) {
    setSubmitting(true)

    createPortfolio(portfolioData)
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
                initialValues={INITIAL_VALUES}
                error={error}
                onSubmit={savePortfolio}
              />
            </Col>
          </Row>
        </div>
      </div>
    </main>
  )
}
PortfolioNew.Layout = BaseLayout
export default PortfolioNew
