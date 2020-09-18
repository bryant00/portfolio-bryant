import React, { useState, useContext } from 'react'
import { IconsContext } from '../../lib/iconsContext'
import { Container, Row, Col, Image } from 'react-bootstrap'

const CvActions = () => {
  const { actions } = useContext(IconsContext)
  const pills = [
    {
      id: 'link',
      href: 'bryant_cv.pdf',
      download: false,
      target: '_blank',
      rel: 'noreferrer noopener',
      src: 'copy',
      alt: 'Link',
      text: 'Link',
    },
    {
      id: 'googleDrive',
      href:
        'https://docs.google.com/document/d/10KsbcRN8s7gVbauvWMYzNwhHA3Y_h1lcPW7CNXXuCrY/edit?usp=sharing',
      download: false,
      target: '_blank',
      rel: 'noreferrer noopener',
      src: 'googleDrive',
      alt: 'Google Drive',
      text: 'Google Drive',
    },
    {
      id: 'download',
      href: '',
      download: 'bryant_cv.pdf',
      target: '_blank',
      rel: 'noreferrer noopener',
      src: 'downArrow',
      alt: 'Download',
      text: 'Download',
    },
  ]

  const Data = () => {
    const list = pills.map((pill, index) => {
      const { src } = pill
      return (
        <a
          key={index}
          className=" badge mx-auto my-1 border my-md-2"
          href={pill.href}
          download={pill.download}
          target={pill.target}
          rel={pill.rel}
        >
          <img
            src={actions[`${src}`].image}
            className="svg-icons m-1 "
            alt={pill.alt}
          />
          <span className=" px-1 text-md">{pill.text}</span>
        </a>
      )
    })
    return list
  }
  return (
    // <div className="row">
    <div className="col-md-2 order-md-2 mb-4 my-md-auto">
      <ul className="list-group d-flex flex-row flex-md-column p-2  ">
        <Data />
      </ul>
    </div>
    // </div>
  )
}

export default CvActions
