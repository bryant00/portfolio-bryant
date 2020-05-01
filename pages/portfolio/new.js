import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout'
import PortfolioCreateForm from '../../components/portfolios/PortfolioCreateForm'
import { Row, Col, Container } from 'reactstrap'
import moment from 'moment'
import { useRouter } from 'next/router'

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  projectUrl: '',
  githubUrl: '',
  imageName: '',
  startDate: moment(),
  endDate: moment(),
}
const theme = {
  mainClass: '',
  navClass: 'default',
  title: 'Bryant Patton - Porfolio',
}

const New = () => {
  const router = useRouter()

  const [error, setError] = useState(undefined)
  function createPortfolio(portfolioData) {
    return undefined
  }
  function savePortfolio(portfolioData, { setSubmitting }) {
    setSubmitting(true)

    createPortfolio(portfolioData)
      .then((portfolio) => {
        setSubmitting(false)
        router.push('/portfolios')
      })
      .catch((err) => {
        const error = err.message || 'Server Error!'
        setSubmitting(false)
        setError({ error })
      })
  }

  return (
    <Layout theme={theme}>
      <div className="base-page portfolio-create-page">
        <Container>
          <Row>
            <Col md="8">
              <PortfolioCreateForm
                initialValues={INITIAL_VALUES}
                error={error}
                onSubmit={savePortfolio}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default New
