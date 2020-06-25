import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Container, Button } from 'react-bootstrap'

import Author from '../svgs/author.svg'
const AboutPage = () => {
  const theme = {
    mainClass: '',
    navClass: 'default',
    title: 'Bryant Patton - About Me',
  }
  return (
    <Container className="bg-light text-dark rounded">
      <Row className="mt-5">
        <Col md="12">
          <div className="left-side">
            <h1 className="">About Me</h1>
            <p className=" ">
              My name is Bryant Patton. I'm a Full Stack developer and
              experienced marketing tech who’s passionate about the web, design,
              and backend development. I use this site to share what I've built
              and experiment with new technologies.
            </p>
          </div>
        </Col>
        <Col md="6">
          <div className="fadein">
            <img alt="web network" src={Author} />
            <div>
              <Button
                as="a"
                // outline
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
                // outline
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
  )
}
export default AboutPage
