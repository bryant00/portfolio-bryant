import React, { useState } from 'react'

const PortfolioCard = (props) => {
  const { buttonLabel, className, portfolio, children } = props

  return (
    <div className="col-12">
      <div className="card border-light  mb-5  portfolio-card">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{portfolio.title}</h5>
              <p className="card-text">{portfolio.description}</p>
              <a
                className="card-link text-primary"
                // style={{ marginLeft: '0.5em' }}
                href={portfolio.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="card-link text-primary"
                // style={{ marginLeft: '0.5em' }}
                target="_blank"
                rel="noreferrer noopener"
                href={portfolio.projectUrl}
              >
                Project
              </a>
            </div>
          </div>
          <div className="col-md-4">
            {portfolio.imageName && (
              <img
                src={`/images/${portfolio.imageName}`}
                alt="Card image cap"
                className="card-img"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
// }
export default PortfolioCard
