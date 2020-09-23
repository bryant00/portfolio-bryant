import React, { useContext } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Skills from './skills'
import { IconsContext } from '../lib/iconsContext'

const AboutPage = () => {
  const { fontAwesome } = useContext(IconsContext)
  const Data = () => {
    const Info = [
      {
        href: null,
        text: 'San Francisco, CA',
        icon: fontAwesome.location.image,
      },
      {
        href: null,
        text: 'Full-Stack Developer',
        icon: fontAwesome.user.image,
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
        href: 'mailto:bryantpatton@gmail.com',
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
      <div className="d-flex p-1 align-items-center" key={i}>
        <Image src={d.icon} width="16px" height="16px" className="mr-1" />
        <a
          href={d.href != null ? d.href : undefined}
          target="_blank"
          rel="noreferrer noopener"
          className="overflow-hidden"
        >
          {d.text}
        </a>
      </div>
    ))
    return list
  }
  return (
    <>
      <h1 className="">About Me</h1>
      <Row className="">
        <Col md="6" className="mx-auto">
          <Row>
            <Col className="col-4">
              <Image
                alt="bryant patton"
                src="/images/avatar.jpeg"
                height="auto"
                rounded
                fluid
              />
            </Col>
          </Row>

          <p className="my-3">
            My name is Bryant Patton. I'm a Full Stack developer and experienced
            marketing tech who’s passionate about the web, design, and backend
            development. I use this site to share what I've built and experiment
            with new technologies.
          </p>
          <div className="d-flex flex-column my-3">
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
