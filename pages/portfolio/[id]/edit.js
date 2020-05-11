import React, { useState } from 'react'
import Layout from '../../../components/layouts/Layout'
import PortfolioEditForm from '../../../components/portfolios/PortfolioEditForm'
import { Row, Col, Container } from 'reactstrap'
import { useRouter } from 'next/router'
import useSWR, { mutate, cache } from 'swr'
import { useAuth0 } from '../../../lib/auth0-spa'

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
    console.dir(props)
    try {
      // mutate('/api/portfolios', [...data, portfolioData], false)
      // await sleep(2000)
      let port = { id: id, data: portfolioData }
      // console.dir(portfolioData)
      mutate(
        '/api/portfolios/[id]/edit',
        await fetcher('/api/portfolios/[id]/edit', {
          method: 'PATCH',
          body: JSON.stringify(port),
        })
      )
      // console.dir(cache)
      setSubmitting(false)
      // props.router.push('/portfolios')
    } catch (err) {
      console.log(err)
      setErrors(err)
      setSubmitting(false)
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
