import React, { useState } from 'react'
import Layout from '../../../components/layouts/Layout'
import PortfolioCreateForm from '../../../components/portfolios/PortfolioCreateForm'
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

const Edit = () => {
  const router = useRouter()
  const { id } = router.query
  const [error, setError] = useState(undefined)

  function updatePortfolio(portfolioData, { setSubmitting }) {
    setSubmitting(false)
    // setSubmitting(true)
    // updatePortfolio(portfolioData)
    router
      .push('/portfolios')
      // setTimeout(() => {
      //   alert(JSON.stringify(portfolioData, null, 2))
      //   setSubmitting(false)
      // }, 400)
      //   .then(() => {
      //     router.push('/portfolios')
      //   })
      .catch((err) => {
        const error = err.message || 'Server Error!'
        setSubmitting(false)
        setError({ error })
      })
  }

  const Data = () => {
    const { data, error } = useSWR('/api/portfolios', fetcher)

    if (error) {
      console.log(error)
      return <div>Failed to load</div>
    }
    if (!data) return <div>Loading...</div>
    console.log(id)
    let p = data.filter((d) => d._id === id)[0]
    if (!p) return <div>Loading...</div>
    return (
      <Col md="10">
        <PortfolioCreateForm
          initialValues={p}
          error={error}
          updatePortfolio={updatePortfolio}
        />
      </Col>
    )
  }

  return (
    <Layout theme={theme}>
      <div className="base-page portfolio-create-page">
        <Container>
          <div className="page-header">
            <h1 className="page-header-title">Edit Porfolio</h1>
          </div>
          <Row>
            <Data></Data>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Edit
