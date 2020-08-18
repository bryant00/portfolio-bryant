import React from 'react'
import Layout from './layouts/Layout'
import { Row, Col, Container, Button } from 'react-bootstrap'
import {
  faJsSquare,
  faHtml5,
  faCss3,
  faPython,
  faAws,
  famysq,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  const Data = () => {
    const data = [faJsSquare, faHtml5, faCss3, faPython, faAws]

    const list = data.map((t, index) => (
      <Col className="list-inline-item col-md-auto">
        <FontAwesomeIcon key={index} icon={t} width="40px" height="auto" />
      </Col>
    ))

    return list
  }

  return (
    <>
      <h1 className="">Technology and Languages</h1>
      <Row className="list-inline row justify-content-md-start py-3">
        <Data></Data>
      </Row>
    </>
  )
}
