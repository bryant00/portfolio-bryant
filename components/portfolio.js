import React from 'react'
import Layout from './layouts/Layout'
import PortfolioCard from './portfolios/PortfolioCard'
import useSWR from 'swr'
import { useAuth0 } from '../lib/auth0-spa'
import { Row, Col, Container, Button } from 'react-bootstrap'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const Data = () => {
    const { data, error } = useSWR('/api/portfolios', fetcher)

    if (error) {
      console.log(error)
      return <div>Failed to load</div>
    }
    if (!data) return <div>Loading...</div>

    const list = data.map((portfolio, index) => (
      <Row key={index} className="my-5">
        <Col className="border-top mt-2 py-2">
          <PortfolioCard portfolio={portfolio}></PortfolioCard>
        </Col>
      </Row>
    ))

    return list
  }

  return (
    <>
      <h1 className="">Portfolio</h1>
      <Data></Data>
    </>
  )
}
