import React from 'react'
import { MyHead } from '../shared/MyHead'
import NavBar from '../shared/NavBar'

export default ({ children, theme }) => (
  <div className="layout-container">
    <MyHead title={theme.title} />
    <NavBar navClass={theme.navClass} />
    <main className={`cover ${theme.mainClass}`}>
      <div className="wrapper">{children}</div>
    </main>
  </div>
)
