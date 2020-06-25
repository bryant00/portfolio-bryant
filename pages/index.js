import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useLayoutEffect,
} from 'react'
import Typed from 'react-typed'
import { Container, Row, Col } from 'react-bootstrap'
import { useAuth0 } from '../lib/auth0-spa'
import Layout from '../components/layouts/Layout'
import AboutPage from '../components/about'

function useScrollTop(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))
  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prefPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    function handleScroll() {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        } else {
          callBack()
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

const isBrowser = typeof window !== 'undefined'

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }
  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

function reducer(state, action) {
  switch (action.type) {
    case 'shrink':
      console.log('shrink')
      return {
        ...state,
        navClass: 'navbar-light bg-light text-dark  p-0 shadow-lg',
        navShrink: true,
      }
    case 'grow':
      console.log('grow')
      return {
        ...state,
        navClass: 'navbar-dark text-light bg-transparent p-2 navhead',
        navShrink: false,
      }
    default:
      throw new Error()
  }
}

const HomePage = () => {
  const roles = ['Developer', 'Tech Lover', 'Team Player', 'Explorer']
  const { user, loading } = useAuth0()
  const [state, dispatch] = useReducer(reducer, {
    mainClass: `index-header text-light`,
    navClass: 'navbar-dark text-light bg-transparent p-2 navhead',
    title: 'Bryant Patton Portfolio',
    navShrink: false,
  })

  useScrollTop(
    ({ prefPos, currPos }) => {
      // const isShow = currPos.y > prefPos.y
      const isShow = currPos.y < -60
      console.log(
        'currPos.y > prefPos.y',
        currPos.y,
        prefPos.y,
        'isShow:',
        isShow,
        'state.navShrink:',
        state.navShrink
      )
      if (isShow !== state.navShrink)
        isShow ? dispatch({ type: 'shrink' }) : dispatch({ type: 'grow' })
    },
    [state],
    false,
    false,
    300
  )

  // useScroll((direction) => {
  //   setScrollDirection(direction)
  // })
  return (
    <Layout theme={state}>
      <Container className="">
        <Row className="">
          <Col className="mx-auto my-5 py-5 ">
            <h1>Welcome to the portfolio website of Bryant Patton.</h1>
          </Col>
        </Row>
        <Row>
          <AboutPage />
        </Row>
      </Container>
    </Layout>
  )
}
export default HomePage
