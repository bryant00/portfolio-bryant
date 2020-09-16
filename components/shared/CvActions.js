import React, { useState, useContext } from 'react'
import { IconsContext } from '../../lib/iconsContext'
import { Container, Row, Col, Image } from 'react-bootstrap'

const CvActions = () => {
  const { actions } = useContext(IconsContext)

  return (
    <div className="row">
      <div className="col col-11 d-flex flex-col justify-content-around mx-auto">
        <div className="badge badge-pill badge-light  m-2">
          <a href="bryant_cv.pdf" target="_blank" rel="noreferrer noopener">
            <Image
              src={actions.filePdf.image}
              className="svg-icons m-2"
              alt="Download"
            />
            <span className=" px-2 text-md">PDF</span>
          </a>
        </div>

        <div className="badge badge-pill badge-light  m-2">
          <a
            href="https://docs.google.com/document/d/10KsbcRN8s7gVbauvWMYzNwhHA3Y_h1lcPW7CNXXuCrY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={actions.googleDrive.image}
              className="svg-icons m-2"
              alt="Download"
            />
            <span className=" px-2 text-md">Google Docs</span>
          </a>
        </div>

        <div className="badge badge-pill badge-light  m-2">
          <a href="bryant_cv.pdf" target="_blank" rel="noreferrer noopener">
            <Image
              src={actions.downArrow.image}
              className="svg-icons m-2"
              alt="Download"
            />
            <span className=" px-2 text-md">Download</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CvActions
