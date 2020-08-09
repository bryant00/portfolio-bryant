import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import AboutPage from '../components/about'
import PortfolioPage from '../components/portfolio'

const Cv = () => {
  // theme.title = 'Preview of my CV'
  // theme.pageName = 'cv'

  return (
    <Layout page="default">
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
        <Row>
          <Container fluid className="bg-light text-dark rounded mx-2">
            <Row className="mt-5">
              <Col md="6" className="mx-auto">
                {/* <div className="cv-title"> */}
                <div>
                  <a
                    download="bryant_cv.pdf"
                    className="btn btn-success"
                    href="/bryant_cv.pdf"
                  >
                    Download
                  </a>
                </div>
                <iframe
                  style={{ width: '100%', height: '800px' }}
                  src="/bryant_cv.pdf"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}

export default Cv
