import React, { useState, useContext } from 'react'
import { useAuth0 } from '../../lib/auth0-spa'
import Link from 'next/link'
import { Navbar, Nav, NavItem, Dropdown } from 'react-bootstrap'

const NavBar = ({ navClass }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [portdropdownOpen, setPortDropdownOpen] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout, isOwner } = useAuth0()
  const menuOpenClass = isNavOpen ? 'menu-open' : 'menu-close'
  function toggle() {
    setIsNavOpen(!isNavOpen)
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen)
  }
  const toggler = () => setPortDropdownOpen((prevState) => !prevState)

  return (
    <div className={`navbar navbar-expand navbar-dark bg-dark ${navClass}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Bryant Patton
        </a>
        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            {isAuthenticated && isOwner ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/portfolio"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  {/* <ul className="dropdown-menu" aria-labelledby="dropdown01"> */}
                  {/* <li> */}
                  <a className="dropdown-item" href="/portfolio">
                    Portfolio
                  </a>
                  {/* </li> */}
                  {/* <li> */}
                  <a className="dropdown-item" href="/portfolio/new">
                    New Portfolio
                  </a>
                  {/* </li> */}
                  {/* </ul> */}
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cv">
                CV
              </a>
            </li>
            {isAuthenticated && isOwner && (
              <li className="nav-item">
                <a
                  onClick={() => logout()}
                  className="nav-link port-navbar-link clickable"
                >
                  Logout
                </a>
              </li>
            )}
            {!isAuthenticated && isOwner && (
              <li className="nav-item">
                <a
                  onClick={() => loginWithRedirect()}
                  className="nav-link port-navbar-link clickable"
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
// NavBar.whyDidYouRender = true
export default NavBar
