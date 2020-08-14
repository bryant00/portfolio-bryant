import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const PortfolioCard = (props) => {
  const { buttonLabel, className, portfolio, children } = props
  const projectImage = `/images/${portfolio.imageName}`
  return (
    <>
      <h5>{portfolio.title}</h5>
      <Row>
        <div className="col">
          <p>{portfolio.description}</p>
          <h5>Features:</h5>
          <ul className="list-inline row justify-content-md-start">
            {portfolio.features.map((f, i) => (
              <li key={i} className="list-inline-item col-md-auto">
                {f}
              </li>
            ))}
          </ul>
          <h5>Tech Stack</h5>
          <ul className="list-inline row justify-content-md-start">
            {portfolio.tech.map((f, i) => (
              <li key={i} className="list-inline-item col-md-auto">
                {f}
              </li>
            ))}
          </ul>
          <p>
            <a
              className="text-primary"
              href={portfolio.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Github Code
            </a>
          </p>
          <a
            className="text-primary"
            target="_blank"
            rel="noreferrer noopener"
            href={portfolio.projectUrl}
          >
            Demo
          </a>
        </div>
        <div
          className="col-md-4"
          style={{
            backgroundImage: `url(${projectImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 0',
            backgroundSize: 'cover',
          }}
        ></div>
      </Row>
    </>
  )
}

export default PortfolioCard
