import React, { useContext } from 'react'
import { MyHead } from '../shared/MyHead'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'
import { themes, ThemeContext } from '../../lib/themeContext'

export const Layout = ({ children, page }) => {
  const theme = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={themes[page]}>
      <MyHead />
      {/* <div className="d-flex flex-column h-100 layout"> */}
      <NavBar useNavShrink={theme.useNavShrink} />

      <main role="main">{children}</main>

      <Footer />
      {/* </div> */}
    </ThemeContext.Provider>
  )
}
export default Layout
