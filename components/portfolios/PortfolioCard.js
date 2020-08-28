import React, { useContext } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { IconsContext } from '../../lib/iconsContext'

const PortfolioCard = (props) => {
  const { buttonLabel, className, portfolio, children } = props
  const icons = useContext(IconsContext)
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
            {portfolio.techIcons.map((t, i) => {
              return (
                // <li key={i} className="list-inline-item col-md-auto">
                //   {f}
                // </li>
                <div
                  key={i}
                  className="badge badge-pill badge-light list-inline m-2"
                >
                  <Image
                    // src={icon.image}
                    src={t.image}
                    rounded
                    width="30px"
                    height="30px"
                    className="list-inline-item mx-2"
                  />

                  <span className="list-inline-item px-2 text-md">
                    {t.name}
                  </span>
                </div>
              )
            })}
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
