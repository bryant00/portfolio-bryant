import React, { useState, useEffect, useRef, useReducer } from 'react'
import Typed from 'react-typed'
import { Container, Row, Col } from 'react-bootstrap'
import { useAuth0 } from '../lib/auth0-spa'
import Layout from '../components/layouts/Layout'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function reducer(state, action) {
  switch (action.type) {
    case 'decrement':
      return {
        ...state,
        isFlipping: !state.isFlipping,
        count: state.isFlipping + 0,
        mainClass: `cover-${state.count}`,
      }
    default:
      throw new Error()
  }
}

const HomePage = () => {
  const roles = ['Developer', 'Tech Lover', 'Team Player', 'Explorer']
  const { user, loading } = useAuth0()
  const [state, dispatch] = useReducer(reducer, {
    isFlipping: false,
    count: 0,
    mainClass: `cover-0`,
    navClass: 'index',
    title: 'Bryant Patton Portfolio',
  })
  useInterval(() => {
    dispatch({ type: 'decrement' })
  }, 6000)

  return (
    <Layout theme={state}>
      <div className="main-section">
        <div className="background-image">
          {/* <img src="/images/background-index.png" /> */}
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div
                  className={`flipper ${state.isFlipping ? 'isFlipping' : ''}`}
                >
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Take a look at my portfolio and work history.
                      </div>
                    </div>

                    <img
                      alt="web network"
                      className="image"
                      src="/images/node-1.jpg"
                    />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Get Your Projects Done </h2>
                      <div className="hero-section-content-intro">
                        Profesional and top quality service in web development.
                      </div>
                    </div>
                    <img
                      alt="web network"
                      className="image"
                      src="/images/node-2.jpg"
                    />
                    <div className="shadow-custom shadow-custom-2">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  {user && (
                    <span>
                      {user.email}
                      <br />
                    </span>
                  )}
                  Welcome to the portfolio website of Bryant Patton. I use this
                  site to share what I've built and experiment with new
                  technologies.
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={60}
                backSpeed={60}
                strings={roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />

              <div className="hero-welcome-bio">
                <h2>Take a look and drop me a line.</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <span className="service-link">
          Illustration credit:{' '}
          <a href="https://www.vecteezy.com/free-vector/grid">
            Grid Vectors by Vecteezy
          </a>
        </span>
      </div>
    </Layout>
  )
}
export default HomePage
