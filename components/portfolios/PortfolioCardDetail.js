import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap'
import moment from 'moment'
import { useAuth0 } from '../../lib/auth0-spa'
import Link from 'next/link'

const PortfolioCardDetail = (props) => {
  const { isOpen, toggle, portfolio } = props
  const { isAuthenticated, isOwner, logout, user } = useAuth0()
  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  )
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
        <ModalBody>
          <p>
            <b>Description: </b>
            {portfolio.description}
          </p>
          <p>
            <b>Company: </b>
            {portfolio.company}
          </p>
          <p>
            <b>Position: </b>
            {portfolio.position}
          </p>
          <p>
            <b>Location: </b>
            {portfolio.location}
          </p>
          <p>
            <b>Start Date: </b>
            {moment(portfolio.startDate).format('MMMM YYYY')}
          </p>
          <p>
            <b>End Date: </b>
            {portfolio.endDate
              ? moment(portfolio.endDate).format('MMMM YYYY')
              : 'Still Working Here'}
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button color="secondary">
            <Link
              href="/portfolio/[portfolio._id]"
              as={`/portfolio/${portfolio._id}`}
            >
              <a className="create-port-btn">View</a>
            </Link>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default PortfolioCardDetail
