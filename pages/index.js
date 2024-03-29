import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import AboutPage from '../components/about'
import PortfolioPage from '../components/portfolio'

const bucket = 'https://bryantpatton-images.s3.us-west-1.amazonaws.com'
const mobile = bucket + '/landingPage/background-index-1200w.jpg'
const tablet = bucket + '/landingPage/background-index-1680w.jpg'
const laptop = bucket + '/landingPage/background-index-2000w.jpg'
const monitor = bucket + '/landingPage/background-index-3000w.jpg'
const widescreen = bucket + '/landingPage/background-index-4000w.jpg'

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
        {/* Components */}
        <Row className="about bg-white text-dark rounded no-gutters mb-1">
          <Col className="col-12  bg-white text-dark rounded ">
            <Row className="mt-2 mb-4 ">
              <Col className="col-10 col-lg-8 mx-auto ">
                <AboutPage />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="about bg-white text-dark rounded no-gutters mt-1">
          <Col className="col-12  bg-white text-dark rounded ">
            <Row className="mt-2 mb-4 ">
              <Col className="col-10 col-lg-8 mx-auto ">
                <PortfolioPage />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default HomePage
