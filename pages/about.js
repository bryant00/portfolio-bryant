import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Cat from '../svgs/cat.svg'
import Author from '../svgs/author.svg'
const AboutPage = () => {
  const theme = {
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
                  // src="/images/tesla.png"
                  // src={Cat}
                  src={Author}
                />
                <div>
                  <Button
                    as="a"
                    outline
                    color="primary"
                    // className="btn btn-success"
                    download="bryant_cv.pdf"
                    style={{ marginLeft: '0.5em' }}
                    href="/bryant_cv.pdf"
                  >
                    Download CV
                  </Button>
                  <Button
                    as="a"
                    outline
                    color="primary"
                    style={{ marginLeft: '0.5em' }}
                    href="https://github.com/bryant00"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Github
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
export default AboutPage
