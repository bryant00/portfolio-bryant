import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Skills from './skills'
import { faMapPin, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const AboutPage = () => {
  const Data = () => {
    const Info = [
      { href: undefined, text: 'San Francisco, CA', icon: faMapPin },
      {
        href: 'https://github.com/bryant00',
        text: 'https://github.com/bryant00',
        icon: faGithub,
      },
      {
        href: 'https://www.linkedin.com/in/bryantpatton/',
        text: 'https://www.linkedin.com/in/bryantpatton/',
        icon: faLinkedin,
      },
      { href: undefined, text: 'bryantpatton@gmail.com', icon: faMailBulk },
    ]
    const list = Info.map((d, i) => (
      <div className="d-flex " key={i}>
        {d.href != undefined ? (
          <>
            <FontAwesomeIcon
              icon={d.icon}
              width="16px"
              height="16px"
              className="mr-1"
            />
            <a
              href={d.href}
              target="_blank"
              rel="noreferrer noopener"
              className="overflow-hidden"
            >
              {d.text}
            </a>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={d.icon}
              width="16px"
              height="16px"
              className="mr-1"
            />
            <div>{d.text}</div>
          </>
        )}
      </div>
    ))
    return list
  }
  return (
    <>
      <h1 className="">About Me</h1>
      <Row className="">
        <Col md="6" className="mx-auto">
          <img
            alt="web network"
            src="/images/avatar.jpeg"
            width="150rem"
            height="auto"
          />
          <p className=" ">
            My name is Bryant Patton. I'm a Full Stack developer and experienced
            marketing tech who’s passionate about the web, design, and backend
            development. I use this site to share what I've built and experiment
            with new technologies.
          </p>
          <div className="d-flex flex-column">
            <Data />
          </div>
        </Col>
        <Col md="6" className="mx-auto">
          <Skills />
        </Col>
      </Row>
    </>
  )
}
export default AboutPage
