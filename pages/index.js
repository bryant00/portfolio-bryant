import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import AboutPage from '../components/about'
import PortfolioPage from '../components/portfolio'
import Skills from '../components/skills'
import { theme } from '../lib/themeContext'

const HomePage = () => {
  return (
    <Layout page="index">
      <Container fluid className="">
        <Row className="welcome">
          <Col className="mx-auto mt-5 pt-5 text-center">
            <h1 className="text-uppercase m-2">Bryant Patton</h1>
          </Col>
          <div className="w-100"></div>
          <Col className="mx-auto mt-3 text-center text-muted">
            <h3>Welcome to my website</h3>
          </Col>
        </Row>
        <Row>
          <Container fluid className="bg-light text-dark rounded mx-2">
            <Row className="mt-5">
              <Col md="6" className="mx-auto">
                <AboutPage />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="mt-3 ">
          <Container fluid className="bg-light text-dark rounded mx-2 ">
            <Row className="mt-5">
              <Col md="6" className="mx-auto ">
                <Skills />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="mt-3">
          <Container fluid className="bg-light text-dark rounded mx-2">
            <Row className="mt-5">
              <Col md="6" className="mx-auto">
                <PortfolioPage />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}
export default HomePage
