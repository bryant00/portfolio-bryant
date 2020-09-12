import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import AboutPage from '../components/about'
import PortfolioPage from '../components/portfolio'

const mobile = '/images/landingPage/background-index-1200w.jpg'
const tablet = '/images/landingPage/background-index-1680w.jpg'
const laptop = '/images/landingPage/background-index-2000w.jpg'
const monitor = '/images/landingPage/background-index-3000w.jpg'
const widescreen = '/images/landingPage/background-index-4000w.jpg'

const HomePage = () => {
  return (
    <Layout page="index">
      <picture>
        <source media="(min-width:2500px)" srcSet={widescreen} />
        <source
          media="(min-width: 1681px) and (max-width: 2499px)"
          srcSet={monitor}
        />
        <source
          media="(min-width: 1025px) and (max-width: 1680px)"
          srcSet={laptop}
        />
        <source
          media="(min-width: 481px) and (max-width: 1024px)"
          srcSet={tablet}
        />
        <source media="(max-width: 480px)" srcSet={mobile} />
        <img src={mobile} className="img-fluid" />
      </picture>
      <div className="d-flex flex-column align-items-center  banner-text">
        <h1 className="text-uppercase text-light">Bryant Patton</h1>

        <h3 className="text-white-50">Welcome to my website</h3>
      </div>

      <Container fluid className="components-container">
        <Row className="about bg-white text-dark rounded mx-2">
          <Container fluid className="bg-white text-dark rounded ">
            <Row className="mt-2 mb-4">
              <Col md="6" className="mx-auto ">
                <AboutPage />
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="mt-3">
          <Container fluid className="bg-white text-dark rounded mx-2">
            <Row className="mt-2 mb-4">
              <Col md="6" className="mx-auto ">
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
