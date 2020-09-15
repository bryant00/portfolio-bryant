import React, { useState, useContext, useReducer } from 'react'
import { useAuth0 } from '../../lib/auth0-spa'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter } from 'next/router'
import { useScrollPosition } from '../layouts/UseScrollPosition'
import { ThemeContext } from '../../lib/themeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function reducer(state, action) {
  switch (action.type) {
    case 'shrink':
      return {
        ...state,
        navClass: 'navbar-light bg-light text-dark p-0 shadow-lg',
        navShrink: true,
        // authorImage: Author,
        authorImage: state.dark.authorImage,
        // gitHubImage: GitHubDark,
        gitHubImage: state.dark.gitHubImage,
      }
    case 'grow':
      return {
        ...state,
        navClass: 'navbar-dark text-white bg-transparent p-0 navhead',
        navShrink: false,
        // authorImage: AuthorLight,
        // gitHubImage: GitHub,
        authorImage: state.light.authorImage,
        gitHubImage: state.dark.gitHubImage,
      }
    default:
      throw new Error()
  }
}

const NavBar = ({ useNavShrink }) => {
  const theme = useContext(ThemeContext)
  const { isAuthenticated, loginWithRedirect, logout, isOwner } = useAuth0()
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, {
    navClass: theme.navClass,
    navShrink: false,
    authorImage: theme.authorImage,
    gitHubImage: theme.gitHubImage,
    dark: theme.dark,
    light: theme.light,
  })
  {
    theme.useNavShrink &&
      useScrollPosition(
        ({ prefPos, currPos }) => {
          const isShow = currPos.y < -60
          if (isShow !== state.navShrink)
            isShow ? dispatch({ type: 'shrink' }) : dispatch({ type: 'grow' })
        },
        [state],
        false,
        false,
        300
      )
  }
  return (
    <Navbar
      fixed="top"
      className={state.navClass}
      style={{ transition: 'all 0.6s ease-out' }}
    >
      <a className="navbar-brand ml-2" href="/">
        <img
          src={state.authorImage}
          width="33em"
          // height="100%"
          className="d-inline-block align-middle image-fluid"
          alt="Bryant Patton logo"
        />
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/cv">
            <span className="navbar-text">CV</span>
          </a>
        </li>
        {isAuthenticated && isOwner && (
          <li className="nav-item">
            <a onClick={() => logout()} className="nav-link port-navbar-link ">
              <span className="navbar-text">Logout</span>
            </a>
          </li>
        )}
        {!isAuthenticated && isOwner && (
          <li className="nav-item">
            <a
              onClick={() => loginWithRedirect()}
              className="nav-link port-navbar-link"
            >
              <span className="navbar-text">Login</span>
            </a>
          </li>
        )}
      </ul>
      <ul className="navbar-nav mr-2">
        <li className="nav-item">
          <a
            className="nav-link "
            href="https://github.com/bryant00"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={state.gitHubImage}
              width="40px"
              width="40px"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            href="https://linkedin.com/in/bryantpatton"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={theme.faLinkedin}
              width="40px"
              width="40px"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            href="mailto:bryantpatton@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={theme.faEnvelope}
              width="40px"
              width="40px"
            />
          </a>
        </li>
      </ul>
    </Navbar>
  )
}
// NavBar.whyDidYouRender = true
export default NavBar
