import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout'
import PortfolioCreateForm from '../../components/portfolios/PortfolioCreateForm'
import { Row, Col } from 'reactstrap'
import { useRouter } from 'next/router'

const theme = {
  mainClass: '',
  navClass: 'default',
  title: 'Bryant Patton - Porfolio',
}

const Edit = ({ data }) => {
  const portfolio = data
  const router = useRouter()
  const [error, setError] = useState(undefined)

  function updatePortfolio(portfolioData, { setSubmitting }) {
    setSubmitting(true)

    updatePortfolio(portfolioData)
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
    </Layout>
  )
}

// PortfolioEdit.getInitialProps = async (portfolioId) => {
//   const res = await fetch(`${process.env.NOW_URL}api/portfolios`)
//   const json = await res.json()
//   return { data: json }
// }

export default Edit
