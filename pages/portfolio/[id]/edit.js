import React, { useState } from 'react'
import Layout from '../../../components/layouts/Layout'
import PortfolioEditForm from '../../../components/portfolios/PortfolioEditForm'
import { Row, Col, Container } from 'reactstrap'
import { useRouter } from 'next/router'
import moment from 'moment'
import useSWR from 'swr'
import { useAuth0 } from '../../../lib/auth0-spa'

const fetcher = (url) => fetch(url).then((res) => res.json())

const theme = {
  mainClass: '',
  navClass: 'default',
  title: 'Bryant Patton - Porfolio',
}

const Edit = () => {
  const router = useRouter()
  const { id } = router.query
  // const [error, setError] = useState(undefined)

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
        // setError({ error })
      })
  }

  // const Data = () => {
  const { data, error } = useSWR('/api/portfolios', fetcher)

  if (error) {
    console.log(error)
    return <div>Failed to load</div>
  }
  if (!data) return <div>Loading...</div>
  console.log(id)
  let p = data.filter((d) => d._id === id)[0]
  if (!p) return <div>Loading...</div>

  // return (

  // )
  // }

  return (
    <Layout theme={theme}>
      <div className="base-page portfolio-create-page">
        <Container>
          <div className="page-header">
            <h1 className="page-header-title">Edit Porfolio</h1>
          </div>
          <Row>
            <Col md="10">
              <PortfolioEditForm
                portfolio={p}
                // error={error}
                // onSubmit={savePortfolio}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Edit
