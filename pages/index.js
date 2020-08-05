import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useLayoutEffect,
} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useAuth0 } from '../lib/auth0-spa'
import Layout from '../components/layouts/Layout'
import AboutPage from '../components/about'
import PortfolioPage from '../components/portfolio'

function reducer(state, action) {
  switch (action.type) {
    case 'shrink':
      console.log('shrink')
      return {
        ...state,
        navClass: 'navbar-light bg-light text-dark  p-0 shadow-lg',
        navShrink: true,
      }
    case 'grow':
      console.log('grow')
      return {
        ...state,
        navClass: 'navbar-dark text-light bg-transparent p-2 navhead',
        navShrink: false,
      }
    default:
      throw new Error()
  }
}

const HomePage = () => {
  const { user, loading } = useAuth0()
  const [state, dispatch] = useReducer(reducer, {
    mainClass: `index-header text-light`,
    title: 'Bryant Patton Portfolio',
  })

  return (
    <Layout theme={state}>
      <Container fluid className="">
        <Row className="welcome">
          <Col className="mx-auto mt-5 pt-5 text-center">
            <h1 className="text-uppercase m-2">Bryant Patton</h1>
          </Col>
          <div className="w-100"></div>
          <Col className="mx-auto mt-3 text-center text-muted">
            <h3>Welcome to my website</h3>
          </Col>
        </Row>
        <Row>
          <Container fluid className="bg-light text-dark rounded mx-2">
            <Row className="mt-5">
              <Col md="6" className="mx-auto">
                <AboutPage />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="mt-3">
          <Container fluid className="bg-light text-dark rounded mx-2">
            <Row className="mt-5">
              <Col md="6" className="mx-auto">
                <PortfolioPage />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}
export default HomePage
