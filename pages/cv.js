import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Container } from 'react-bootstrap'

const Cv = () => {
  // theme.title = 'Preview of my CV'
  // theme.pageName = 'cv'

  return (
    <Layout page="default">
      <Row>
        <Col md="6" className="mx-auto">
          <div className="w-100"></div>
          <Col className="mx-auto mt-3 text-center text-muted">
            <h3>My Cv</h3>
          </Col>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
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
        </Col>
      </Row>
    </Layout>
  )
}

export default Cv
