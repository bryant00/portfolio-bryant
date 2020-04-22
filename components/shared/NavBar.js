import React, { useState, useContext } from 'react'

import { useAuth0 } from '../../lib/auth0-spa'
import ActiveLink from '../ActiveLink'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'
import { ThemeContext } from '../../lib/themeContext'

const BsNavLink = (props) => {
  const { route, title } = props
  const className = props.className || ''

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
  )
}

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  const menuOpenClass = isNavOpen ? 'menu-open' : 'menu-close'
  const theme = useContext(ThemeContext)
  console.log(theme)
  const navStyle = 'index'
  function toggle() {
    setIsNavOpen(!isNavOpen)
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div>
      <Navbar
        className={`port-navbar port-nav-base absolute port-nav-${theme.index} ${menuOpenClass}`}
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Bryant Patton
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            {/* {this.renderBlogMenu()} */}
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="Cv" />
            </NavItem>
            {isAuthenticated && (
              <NavItem className="port-navbar-item">
                <a
                  // href="/api/logout"
                  onClick={() => logout()}
                  className="nav-link port-navbar-link clickable"
                >
                  Logout
                </a>
              </NavItem>
            )}
            {!isAuthenticated && (
              <NavItem className="port-navbar-item">
                <a
                  // href="/api/login"
                  onClick={() => loginWithRedirect()}
                  className="nav-link port-navbar-link clickable"
                >
                  Login
                </a>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
// function renderBlogMenu({ isSiteOwner }) {
//   if (isSiteOwner) {
//     return (
//       <Dropdown
//         className="port-navbar-link port-dropdown-menu"
//         nav
//         isOpen={dropdownOpen}
//         toggle={toggleDropdown}
//       >
//         <DropdownToggle className="port-dropdown-toggle" nav caret>
//           Blog
//         </DropdownToggle>
//         <DropdownMenu>
//           <DropdownItem>
//             <BsNavLink
//               className="port-dropdown-item"
//               route="/blogs"
//               title="Blogs"
//             />
//           </DropdownItem>
//           <DropdownItem>
//             <BsNavLink
//               className="port-dropdown-item"
//               route="/blogs/new"
//               title="Create a Blog"
//             />
//           </DropdownItem>
//           <DropdownItem>
//             <BsNavLink
//               className="port-dropdown-item"
//               route="/blogs/dashboard"
//               title="Blogs Dashboard"
//             />
//           </DropdownItem>
//         </DropdownMenu>
//       </Dropdown>
//     )
//   }

//   return (
//     <NavItem className="port-navbar-item">
//       <BsNavLink route="/blogs" title="Blog" />
//     </NavItem>
//   )
// }
