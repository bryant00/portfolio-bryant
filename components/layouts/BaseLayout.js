import React from 'react'
import Header from '../shared/Header'
// import {ThemeContext} from '../../lib/themeContext'

export default ({ children }) => {
  return (
    <div className="layout-container">
      <Header className={`port-nav-default`} />
      {children}
    </div>
  )
}
