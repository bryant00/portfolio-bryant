import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout'
import PortfolioEditForm from '../../components/portfolios/PortfolioEditForm'
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
  const { query } = useRouter()
  const { id } = query
  const [data, setData] = useState({})
  // const { data, error } = useSWR(
  //   () => query.id && `/api/portfolios/${query.id}`,
  //   fetcher
  // )

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function savePortfolio(portfolioData, setSubmitting, props, setErrors) {
    try {
      await sleep(2000)
      setSubmitting(false)
      props.router.push('/portfolios')
    } catch (err) {
      console.log(err)
      setErrors(err)
    }
  }

  return (
    <Layout theme={theme}>
      <div className="base-page portfolio-create-page">
        <Container>
          <div className="page-header">
            <h1 className="page-header-title">New Porfolio</h1>
          </div>
          <Row>
            <Col md="8">
              <PortfolioEditForm
                onSubmit={savePortfolio}
                portfolio={data}
                router={router}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default New
