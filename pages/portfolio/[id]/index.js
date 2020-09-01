import React, { useState } from 'react'
import useSWR, { mutate, cache } from 'swr'
import { useAuth0 } from '../../../lib/auth0-spa'
import { Col, Row, Container, Button, ButtonGroup } from 'react-bootstrap'
import Layout from '../../../components/layouts/Layout'
import { useRouter } from 'next/router'
import PortfolioCard from '../../../components/portfolios/PortfolioCard'
import Link from 'next/link'

const fetcher = async (...args) => {
  const res = await fetch(...args)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

const theme = {
  navClass: 'default',
  title: 'Bryant Patton - Porfolio',
}

const Portfolio = () => {
  const { isAuthenticated, isOwner, logout, user } = useAuth0()
  const router = useRouter()
  const { query } = useRouter()
  const { id } = query
  const { data, error } = useSWR(
    () => query.id && `/api/portfolios/${query.id}`,
    fetcher
  )
  const [isSubmitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  async function deletePortfolio() {
    console.log('deleting function')
    setSubmitting(true)
    let port = { id: id, data: data }
    port = JSON.stringify(port)
    try {
      mutate(
        '/api/portfolios/[id]/edit',
        await fetcher('/api/portfolios/[id]/edit', {
          method: 'DELETE',
          body: port,
        })
      )
      setSubmitting(false)
      router.push('/portfolio')
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
      <div className="base-page portfolio-page">
        <Container>
          <div className="page-header">
            <h1 className="page-header-title">Porfolio</h1>
          </div>
          <Row>
            {/* <Data></Data> */}
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <PortfolioCard portfolio={data}></PortfolioCard>
              {isAuthenticated && isOwner && (
                <div>
                  <Button
                    outline
                    size="lg"
                    color="warning"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push(`/portfolio/${id}/edit`)
                    }}
                  >
                    Edit
                  </Button>{' '}
                  <Button
                    outline
                    size="lg"
                    color="danger"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={(e) => {
                      e.preventDefault()
                      deletePortfolio()
                    }}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
export default Portfolio
