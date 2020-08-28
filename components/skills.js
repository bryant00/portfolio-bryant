import React, { useContext, useEffect, useState } from 'react'
import Layout from './layouts/Layout'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { IconsContext } from '../lib/iconsContext'
import {
  faJsSquare,
  faHtml5,
  faCss3,
  faPython,
  faAws,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  const icons = useContext(IconsContext)
  const languageAry = ['html5', 'css3', 'python', 'javascript']
  let tools = ['aws', 'react', 'postgressql', 'django', 'git', 'redux', 'node']
  let [languageMapped, setLanguageMapped] = useState([])
  let [toolsMapped, setToolsMapped] = useState([])
  let [loaded, setLoaded] = useState(false)
  useEffect(() => {
    let languageIcons = languageAry.reduce((ac, cv) => {
      if (icons[cv] != undefined) {
        ac.push(icons[cv])
      }
      return ac
    }, [])

    let toolsIcons = tools.reduce((ac, cv) => {
      if (icons[cv] != undefined) {
        ac.push(icons[cv])
      }
      return ac
    }, [])
    setLanguageMapped(languageIcons)
    setToolsMapped(toolsIcons)
    setLoaded(true)
  }, [setLoaded, setLanguageMapped, setToolsMapped])

  const IconBox = ({ iconList }) => {
    const list = iconList.map((t, index) => (
      <Col className="list-inline-item col-md-auto" key={index}>
        <div className="badge badge-pill badge-light list-inline m-2">
          <Image
            src={t.image}
            rounded
            width="30px"
            height="30px"
            className="list-inline-item mx-2"
          />

          <span className="list-inline-item px-2 text-md">{t.name}</span>
        </div>
      </Col>
    ))

    return list
  }

  return (
    <>
      <h4 className="">Languages</h4>
      <Row className="list-inline row justify-content-md-start py-3">
        {loaded && <IconBox iconList={languageMapped}></IconBox>}
      </Row>
      <h4 className="">Technology and Tools</h4>
      <Row className="list-inline row justify-content-md-start py-3">
        {loaded && <IconBox iconList={toolsMapped}></IconBox>}
      </Row>
    </>
  )
}
