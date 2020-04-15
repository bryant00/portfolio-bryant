import React, { useState, useEffect, useRef } from 'react'
import Typed from 'react-typed'

import IndexLayout from '../components/layouts/IndexLayout'
import { Button, Container, Row, Col } from 'reactstrap'

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

const HomePage = () => {
  const [isFlipping, setIsFlipping] = useState(false)
  const roles = ['Developer', 'Tech Lover', 'Team Player', 'Explorer']

  useInterval(() => {
    // Your custom logic here
    setIsFlipping(!isFlipping)
  }, 6000)

  return (
    <main className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`}>
      <div className="wrapper">
        <div className="main-section">
          <div className="background-image">
            <img src="/public/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>

                      <img
                        alt="Guy programming welcome picture"
                        className="image"
                        src="/public/images/node-1.jpg"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Get Your Projects Done </h2>
                        <div className="hero-section-content-intro">
                          Profesional and top quality service in web
                          development.
                        </div>
                      </div>
                      <img
                        alt="Guy programming welcome picture"
                        className="image"
                        src="/public/images/node-2.jpg"
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
                    Welcome to the portfolio website of Bryant Patton. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
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
                  <h2>Let's take a look on my work.</h2>
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
      </div>
    </main>
  )
}
HomePage.Layout = IndexLayout
// export default Index
export default HomePage
