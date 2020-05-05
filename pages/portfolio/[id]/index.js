import React, { useState } from 'react'
import useSWR from 'swr'
import { useAuth0 } from '../../../lib/auth0-spa'
import { Col, Row, Container, Button } from 'reactstrap'
import Layout from '../../../components/layouts/Layout'
import { useRouter } from 'next/router'
import PortfolioCard from '../../../components/portfolios/PortfolioCard'
import Link from 'next/link'
// const fetcher = (url) => fetch(url).then((res) => res.json())

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

const Portfolio = () => {
  const { isAuthenticated, isOwner, logout, user } = useAuth0()
  const { query } = useRouter()
  const { id } = query
  const { data, error } = useSWR(
    () => query.id && `/api/portfolios/${query.id}`,
    fetcher
  )
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
                <Button>
                  <Link
                    href="/portfolio/[id]/edit"
                    as={`/portfolio/${id}/edit`}
                  >
                    <a className="create-port-btn">Edit</a>
                  </Link>
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
export default Portfolio
