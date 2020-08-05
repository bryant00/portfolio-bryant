import React from 'react'
import Layout from '../components/layouts/Layout'

import { Row, Col, Container } from 'react-bootstrap'

const Cv = () => {
  const theme = {
    mainClass: '',
    navClass: 'default',
    title: 'Preview of my CV',
  }

  return (
    <Layout theme={theme}>
      <div className="base-page cv-page">
        <Container>
          <div className="page-header">
            <h1 className="page-header-title">Preview of my CV</h1>
          </div>
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
        </Container>
      </div>
    </Layout>
  )
}

export default Cv
