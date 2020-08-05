import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Container, Button } from 'react-bootstrap'

import Author from '../svgs/author.svg'
const AboutPage = () => {
  return (
    <>
      <h1 className="">About Me</h1>
      <img alt="web network" src={Author} width="150rem" height="auto" />
      <p className=" ">
        My name is Bryant Patton. I'm a Full Stack developer and experienced
        marketing tech who’s passionate about the web, design, and backend
        development. I use this site to share what I've built and experiment
        with new technologies.
      </p>
    </>
  )
}
export default AboutPage
