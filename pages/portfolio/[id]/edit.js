import React, { useState } from 'react'
import Layout from '../../../components/layouts/Layout'
import PortfolioEditForm from '../../../components/portfolios/PortfolioEditForm'
import { Row, Col, Container } from 'reactstrap'
import { useRouter } from 'next/router'
import moment from 'moment'
import useSWR from 'swr'
import { useAuth0 } from '../../../lib/auth0-spa'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

const theme = {
  mainClass: '',
  navClass: 'default',
  title: 'Bryant Patton - Porfolio',
}

const Edit = () => {
  const router = useRouter()
  const { query } = useRouter()
  const { id } = query
  const { data, error } = useSWR(
    () => query.id && `/api/portfolios/${query.id}`,
    fetcher
  )

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

  if (error) {
    console.log(error)
    return <div>Failed to load</div>
  }
  if (!data) return <div>Loading...</div>

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
                portfolio={data}
                onSubmit={savePortfolio}
                router={router}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Edit
