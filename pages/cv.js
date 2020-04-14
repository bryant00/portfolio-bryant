import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

import { Row, Col, Container } from 'reactstrap'

const Cv = () => {
  const title = 'Preview of my CV'
  return (
    <main className="cover">
      <div className="wrapper">
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
                    href="/static/bryant_cv.pdf"
                  >
                    Download
                  </a>
                </div>
                <iframe
                  style={{ width: '100%', height: '800px' }}
                  src="/static/bryant_cv.pdf"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  )
}
Cv.Layout = BaseLayout

export default Cv
