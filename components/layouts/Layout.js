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
      {page === 'index' ? (
        <div className="d-flex flex-column h-100 layout">
          <MyHead />
          <NavBar useNavShrink={theme.useNavShrink} />
          <div className={theme.heroClass}>
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="d-flex flex-column h-100 layout">
          <MyHead />
          <NavBar useNavShrink={theme.useNavShrink} />
          <div className={theme.heroClass}>
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      )}
    </ThemeContext.Provider>
  )
}
