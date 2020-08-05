import React, { useState, useContext, useReducer } from 'react'
import { useAuth0 } from '../../lib/auth0-spa'
import ActiveLink from './ActiveLink'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter } from 'next/router'
import Author from '../../svgs/author.svg'
import AuthorLight from '../../svgs/authorLight.svg'
import GitHub from '../../svgs/github.svg'
import GitHubDark from '../../svgs/githubDark.svg'
import { useScrollTop } from '../layouts/Layout'

function reducer(state, action) {
  switch (action.type) {
    case 'shrink':
      console.log('shrink')
      return {
        ...state,
        navClass: 'navbar-light bg-light text-dark  p-0 shadow-lg',
        navShrink: true,
        authorImage: Author,
        gitHubImage: GitHubDark,
      }
    case 'grow':
      console.log('grow')
      return {
        ...state,
        navClass: 'navbar-dark text-white bg-transparent p-2 navhead',
        navShrink: false,
        authorImage: AuthorLight,
        gitHubImage: GitHub,
      }
    default:
      throw new Error()
  }
}

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, isOwner } = useAuth0()
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, {
    navClass: 'navbar-dark text-white bg-transparent p-2 navhead',
    navShrink: false,
    authorImage: AuthorLight,
    gitHubImage: GitHub,
  })
  useScrollTop(
    ({ prefPos, currPos }) => {
      // const isShow = currPos.y > prefPos.y
      const isShow = currPos.y < -60
      // console.log(
      //   'currPos.y > prefPos.y',
      //   currPos.y,
      //   prefPos.y,
      //   'isShow:',
      //   isShow,
      //   'state.navShrink:',
      //   state.navShrink
      // )
      if (isShow !== state.navShrink)
        isShow ? dispatch({ type: 'shrink' }) : dispatch({ type: 'grow' })
    },
    [state],
    false,
    false,
    300
  )
  return (
    <Navbar fixed="top" className={state.navClass}>
      {/* <div className="container"> */}
      <ActiveLink activeClassName="active" href="/">
        <a className="navbar-brand ml-2" href="/">
          <img
            src={state.authorImage}
            width="60"
            height="100%"
            className="d-inline-block align-middle"
            alt="Bryant Patton logo"
          />
        </a>
      </ActiveLink>
      {/* <div className="collapse navbar-collapse" id="navbarsExample02"> */}
      <ul className="navbar-nav mr-auto">
        {isAuthenticated && isOwner ? (
          <ActiveLink activeClassName="active" href="/portfolio">
            <NavDropdown title="Portfolio" id="portfolio-nav-dropdown">
              <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
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
              <a className="nav-link " href="/portfolio">
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
            <a onClick={() => logout()} className="nav-link port-navbar-link ">
              Logout
            </a>
          </li>
        )}
        {!isAuthenticated && isOwner && (
          <li className="nav-item">
            <a
              onClick={() => loginWithRedirect()}
              className="nav-link port-navbar-link"
            >
              Login
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
            <img src={state.gitHubImage} width="40px" height="auto" />
          </a>
        </li>
      </ul>
      {/* </div> */}
      {/* </div> */}
    </Navbar>
  )
}
// NavBar.whyDidYouRender = true
export default NavBar
