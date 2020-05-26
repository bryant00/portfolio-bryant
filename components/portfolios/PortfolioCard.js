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
  Row,
} from 'reactstrap'
import Cat from '../../svgs/cat.svg'
import PortfolioCardDetail from './PortfolioCardDetail'

const PortfolioCard = (props) => {
  const { buttonLabel, className, portfolio, children } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div className="col-8">
      <Card body outline color="secondary" className="mb-5  portfolio-card">
        <CardImg
          width="100%"
          src={`/images/${portfolio.imageName}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="portfolio-card-title">
            {portfolio.title}
          </CardTitle>
          <CardSubtitle>{portfolio.position}</CardSubtitle>
          <CardText className="portfolio-card-text">
            {portfolio.description}
          </CardText>
          <Button
            as="a"
            outline
            color="primary"
            style={{ marginLeft: '0.5em' }}
            href={portfolio.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </Button>
          <Button
            as="a"
            outline
            color="primary"
            style={{ marginLeft: '0.5em' }}
            href={portfolio.projectUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Project
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
// }
export default PortfolioCard
