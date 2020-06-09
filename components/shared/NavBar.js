import React, { useState, useContext } from 'react'
import { useAuth0 } from '../../lib/auth0-spa'
import ActiveLink from './ActiveLink'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter } from 'next/router'

const NavBar = ({ navClass }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [portdropdownOpen, setPortDropdownOpen] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout, isOwner } = useAuth0()
  const menuOpenClass = isNavOpen ? 'menu-open' : 'menu-close'
  const router = useRouter()
  function toggle() {
    setIsNavOpen(!isNavOpen)
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen)
  }
  const toggler = () => setPortDropdownOpen((prevState) => !prevState)

  return (
    <Navbar className={`navbar navbar-expand navbar-dark bg-dark ${navClass}`}>
      <div className="container">
        <ActiveLink activeClassName="active" href="/">
          <a className="navbar-brand " href="/">
            Bryant Patton
          </a>
        </ActiveLink>
        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <ActiveLink activeClassName="active" href="/about">
                <a className="nav-link" href="/about">
                  About
                </a>
              </ActiveLink>
            </li>
            {isAuthenticated && isOwner ? (
              <ActiveLink activeClassName="active" href="/portfolio">
                <NavDropdown title="Portfolio" id="portfolio-nav-dropdown">
                  <NavDropdown.Item href="/portfolio">
                    Portfolio
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => {
                      e.preventDefault()
                      router.push('/portfolio/new')
                    }}
                  >
                    Add Portfolio
                  </NavDropdown.Item>
                </NavDropdown>
              </ActiveLink>
            ) : (
              <li className="nav-item">
                <ActiveLink activeClassName="active" href="/portfolio">
                  <a className="nav-link" href="/portfolio">
                    Portfolio
                  </a>
                </ActiveLink>
              </li>
            )}
            <li className="nav-item">
              <ActiveLink activeClassName="active" href="/cv">
                <a className="nav-link" href="/cv">
                  CV
                </a>
              </ActiveLink>
            </li>
            {isAuthenticated && isOwner && (
              <li className="nav-item">
                <a
                  onClick={() => logout()}
                  className="nav-link port-navbar-link "
                >
                  Logout
                </a>
              </li>
            )}
            {!isAuthenticated && isOwner && (
              <li className="nav-item">
                <a
                  onClick={() => loginWithRedirect()}
                  className="nav-link port-navbar-link "
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Navbar>
  )
}
// NavBar.whyDidYouRender = true
export default NavBar
