import React, { useState, useContext } from 'react'
import { IconsContext } from '../../lib/iconsContext'
import { Container, Row, Col, Image } from 'react-bootstrap'

const SideLinks = ({ useNavShrink }) => {
  const { nav } = useContext(IconsContext)

  return (
    <nav id="sidelinks" className="col-1 col-lg-2 d-md-block ">
      <div class="sidelink-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/bryant00"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={nav.downArrow.image} className="svg-icons"></Image>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideLinks
