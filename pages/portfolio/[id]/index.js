import React, { useState } from 'react'
import useSWR from 'swr'
import { useAuth0 } from '../../../lib/auth0-spa'
import { Col, Row, Container, Button } from 'reactstrap'
import Layout from '../../../components/layouts/Layout'
import { useRouter } from 'next/router'
import PortfolioCard from '../../../components/portfolios/PortfolioCard'
import Link from 'next/link'
const fetcher = (url) => fetch(url).then((res) => res.json())
const theme = {
  mainClass: '',
  navClass: 'default',
  title: 'Bryant Patton - Porfolio',
}

const Portfolio = () => {
  const router = useRouter()
  const { id } = router.query

  const { isAuthenticated, isOwner } = useAuth0()
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
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <PortfolioCard portfolio={p}></PortfolioCard>
        {isAuthenticated && isOwner && (
          <Button>
            <Link href="/portfolio/[id]/edit" as={`/portfolio/${id}/edit`}>
              <a className="create-port-btn">Edit</a>
            </Link>
          </Button>
        )}
      </Col>
    )
  }
  return (
    <Layout theme={theme}>
      <div className="base-page portfolio-page">
        <Container>
          <div className="page-header">
            <h1 className="page-header-title">Porfolio</h1>
          </div>
          <Row>
            <Data></Data>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
export default Portfolio
