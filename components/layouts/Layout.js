import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useLayoutEffect,
} from 'react'
import { MyHead } from '../shared/MyHead'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'

export function useScrollTop(effect, deps, element, useWindow, wait) {
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

export default ({ children, theme }) => (
  <div className="d-flex flex-column h-100 layout">
    <MyHead title={theme.title} />
    <NavBar />
    <div className={theme.mainClass}>
      {/* <div className="middle"> */}
      <main>{children}</main>
      {/* </div> */}
    </div>
    <Footer />
  </div>
)
