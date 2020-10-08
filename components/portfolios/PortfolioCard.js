import React, { useContext } from 'react'
import { Image } from 'react-bootstrap'
import { IconsContext } from '../../lib/iconsContext'

const PortfolioCard = (props) => {
  const { portfolio } = props
  const { fontAwesome } = useContext(IconsContext)
  let projectImage = `/images/projects/${portfolio.imageName}`

  const Features = () => {
    const list = portfolio.features.map((f, i) => (
      <li key={i} className="list-inline-item col-md-auto">
        <Image
          src={fontAwesome.check.image}
          width="16px"
          height="16px"
          className="mr-1"
        />
        {f}
      </li>
    ))
    return list
  }

  const Tech = () => {
    const list = portfolio.techIcons.map((t, i) => {
      return (
        <div key={i} className="badge badge-pill badge-light list-inline m-2">
          <Image
            src={t.image}
            rounded
            width="30px"
            height="30px"
            className="list-inline-item mx-2"
          />

          <span className="list-inline-item px-2 text-md">{t.name}</span>
        </div>
      )
    })
    return list
  }
  return (
    <>
      <hr className="my-4"></hr>
      <h4 className="mt-4">{portfolio.title}</h4>
      <div className="my-4 mx-auto d-flex flex-column justify-content-center align-items-center">
        <img src={projectImage} className="img-fluid p-0 portfolio-image" />
      </div>
      <p>{portfolio.description}</p>
      <h5>Features:</h5>
      <ul className="list-inline row justify-content-md-start">
        <Features />
      </ul>
      <h5>Tech Stack:</h5>
      <ul className="list-inline row justify-content-md-start">
        <Tech />
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
      <p>
        <a
          className="text-primary"
          target="_blank"
          rel="noreferrer noopener"
          href={portfolio.projectUrl}
        >
          Demo
        </a>
      </p>
    </>
  )
}

export default PortfolioCard
