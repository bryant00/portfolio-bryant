import React from 'react'
import { MyHead } from '../shared/MyHead'
import NavBar from '../shared/NavBar'

export default ({ children, theme }) => (
  <>
    <MyHead title={theme.title} />
    <NavBar navClass={theme.navClass} />
    <div className={theme.mainClass}>
      {/* <div className="middle"> */}
      <main>{children}</main>
      {/* </div> */}
    </div>
  </>
)
