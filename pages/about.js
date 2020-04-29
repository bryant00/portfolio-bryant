import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Container, Media } from 'reactstrap'

const AboutPage = () => {
  const theme = {
    mainClass: '',
    navClass: 'default',
    title: 'Bryant Patton - About Me',
  }
  return (
    <Layout theme={theme}>
      <div className="base-page about-page">
        <Container>
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To My About Page</h4>
                <p className="subsubTitle fadein">
                  My name is Bryant Patton. I'm a Full Stack developer and
                  experienced marketing tech who’s passionate about the web,
                  design, and backend development.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <img
                  alt="web network"
                  // className="image"
                  src="/images/tesla.png"
                />

                <p>...</p>
                <p>....</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
export default AboutPage
