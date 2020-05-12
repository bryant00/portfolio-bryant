import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Button,
  CardImg,
  CardSubtitle,
  CardImgOverlay,
} from 'reactstrap'
import Cat from '../../svgs/cat.svg'
import PortfolioCardDetail from './PortfolioCardDetail'

const PortfolioCard = (props) => {
  const { buttonLabel, className, portfolio, children } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <span onClick={toggle}>
      <PortfolioCardDetail
        toggle={toggle}
        portfolio={portfolio}
        isOpen={modal}
      />
      <div>
        <Card inverse className="portfolio-card">
          <CardImg
            width="100%"
            src={`/images/${portfolio.imageName}`}
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardHeader className="portfolio-card-header">
              {portfolio.imageName}
            </CardHeader>
            <CardTitle className="portfolio-card-title">
              {portfolio.title}
            </CardTitle>
            <CardText className="portfolio-card-text">
              {portfolio.description}
            </CardText>
            <CardText className="portfolio-card-text">
              {portfolio.position}
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
    </span>
  )
}
// }
export default PortfolioCard
