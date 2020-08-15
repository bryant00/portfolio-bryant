import React, { useContext } from 'react'
import { MyHead } from '../shared/MyHead'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'
import { themes, ThemeContext } from '../../lib/themeContext'
import { Row, Col, Container } from 'react-bootstrap'

export default ({ children, page }) => {
  const theme = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={themes[page]}>
      <MyHead />
      <NavBar useNavShrink={theme.useNavShrink} />

      {children}

      <Footer />
    </ThemeContext.Provider>
  )
}
