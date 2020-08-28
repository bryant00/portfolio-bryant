import React, { useContext } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Skills from './skills'
import { faMapPin, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconsContext } from '../lib/iconsContext'

const AboutPage = () => {
  const { fontAwesome } = useContext(IconsContext)
  const Data = () => {
    const Info = [
      {
        href: undefined,
        text: 'San Francisco, CA',
        icon: fontAwesome.location.image,
      },
      {
        href: 'https://github.com/bryant00',
        text: 'https://github.com/bryant00',
        icon: fontAwesome.github.image,
        target: '_blank',
        rel: 'noreferrer noopener',
      },
      {
        href: 'https://www.linkedin.com/in/bryantpatton/',
        text: 'https://www.linkedin.com/in/bryantpatton/',
        icon: fontAwesome.linkedin.image,
        target: '_blank',
        rel: 'noreferrer noopener',
      },
      {
        href: undefined,
        text: 'bryantpatton@gmail.com',
        icon: fontAwesome.email.image,
      },
      {
        href: '/cv',
        text: 'Resume',
        icon: fontAwesome.filePdf.image,
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    ]
    const list = Info.map((d, i) => (
      <div className="d-flex " key={i}>
        {d.href != undefined ? (
          <>
            <Image src={d.icon} width="16px" height="16px" className="mr-1" />
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
            <Image src={d.icon} width="16px" height="16px" className="mr-1" />
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
          <Image
            alt="bryant patton"
            src="/images/avatar.jpeg"
            width="150rem"
            height="auto"
            rounded
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
