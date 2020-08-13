import React, { useContext, useReducer } from 'react'
import { MyHead } from '../shared/MyHead'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'
import {
  ThemeContext,
  DispatchContext,
  navReducer,
  themes,
} from '../../lib/themeContext'
import { Row, Col, Container } from 'react-bootstrap'
// export default ({ children, theme }) => {
export default ({ children, page }) => {
  const [state, dispatch] = useReducer(navReducer, themes)
  const theme = useContext(ThemeContext)

  return (
    <DispatchContext.Provider value={dispatch}>
      {/* <ThemeContext.Provider value={themes[page]}> */}
      <ThemeContext.Provider value={themes[page]}>
        {page === 'index' ? (
          <div className="d-flex flex-column h-100 layout">
            <MyHead />
            <NavBar page={page} />
            <div className={state[page].heroClass}>
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="d-flex flex-column h-100 layout">
            <MyHead />
            <NavBar page={page} />
            <Container className="about">
              <Row className="">
                <Col className="">{children}</Col>
              </Row>
            </Container>
            <Footer />
          </div>
        )}
      </ThemeContext.Provider>
    </DispatchContext.Provider>
  )
}
