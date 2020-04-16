import React, { useState, useEffect } from 'react'
import { useFetchUser } from '../../lib/user'
import ActiveLink from '../ActiveLink'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'

const BsNavLink = (props) => {
  const { route, title } = props
  const className = props.className || ''

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
  )
}

const Header = ({ className }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  // const { isAuthenticated, user, className } = props
  const { user, loading } = useFetchUser()
  // console.log(user, loading)
  const menuOpenClass = isNavOpen ? 'menu-open' : 'menu-close'

  function toggle() {
    setIsNavOpen(!isNavOpen)
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div>
      <Navbar
        className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
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
            {!loading &&
              (user ? (
                <NavItem className="port-navbar-item">
                  {/* {console.log(user)} */}
                  <a
                    href="api/logout"
                    // onClick={auth0.login}
                    className="nav-link port-navbar-link clickable"
                  >
                    Logout
                  </a>
                </NavItem>
              ) : (
                <NavItem className="port-navbar-item">
                  <a
                    href="api/login"
                    // onClick={auth0.login}
                    className="nav-link port-navbar-link clickable"
                  >
                    Login
                  </a>
                </NavItem>
              ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
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
