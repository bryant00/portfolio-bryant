import React, { useContext } from 'react'
import { MyHead } from '../shared/MyHead'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'
import { themes, ThemeContext } from '../../lib/themeContext'
import { Row, Col, Container } from 'react-bootstrap'
// export default ({ children, theme }) => {
export default ({ children, page }) => {
  const theme = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={themes[page]}>
      <MyHead />
      <NavBar useNavShrink={theme.useNavShrink} />
      {/* <main
        role="main"
        className="flex-shrink-0"
        // style={{ padding: '77px 0 0' }}
      > */}
      {/* <Container style={{ padding: '8vh 15px 0' }}> */}
      {/* <Container style={{ padding: '77px 15px 0' }}> */}
      {children}
      {/* <Row className="">
            <Col className="">{children}</Col>
          </Row> */}
      {/* </Container> */}
      {/* </main> */}
      <Footer />
    </ThemeContext.Provider>
  )
}
