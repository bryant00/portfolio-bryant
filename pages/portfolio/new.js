import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout'
import PortfolioEditForm from '../../components/portfolios/PortfolioEditForm'
import { Row, Col, Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import useSWR, { mutate, cache } from 'swr'

const fetcher = async (...args) => {
  const res = await fetch(...args)
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

const New = () => {
  const router = useRouter()
  // const { data } = useSWR('/api/portfolios', fetcher)

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function savePortfolio(portfolioData, setSubmitting, props, setErrors) {
    try {
      // mutate('/api/portfolios', [...data, portfolioData], false)
      // await sleep(2000)
      mutate(
        '/api/portfolios/new',
        await fetcher('/api/portfolios/new', {
          method: 'POST',
          body: JSON.stringify(portfolioData),
        })
      )
      // console.dir(cache)
      setSubmitting(false)
      props.router.push('/portfolio')
    } catch (err) {
      console.log(err)
      setErrors(err)
      setSubmitting(false)
    }
  }

  return (
    <Layout theme={theme}>
      <div className="base-page portfolio-create-page">
        <Container>
          {/* {console.dir(cache)} */}
          <div className="page-header">
            <h1 className="page-header-title">New Porfolio</h1>
          </div>
          <Row>
            <Col md="8">
              <PortfolioEditForm
                onSubmit={savePortfolio}
                portfolio={{}}
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
