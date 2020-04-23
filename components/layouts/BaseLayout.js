import React from 'react'
import NavBar from '../shared/NavBar'
import { ThemeContext, themes } from '../../lib/themeContext'

export default ({ children }) => {
  return (
    <ThemeContext.Provider value={themes}>
      <div className="layout-container">
        <NavBar />
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
