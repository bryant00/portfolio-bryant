import React, { useState, useContext, useReducer } from 'react'

const Footer = () => {
  return (
    <footer
      className="footer mt-auto py-3 bg-light"
      // style={{ backgroundColor: 'white' }}
      // style={{ background: 'linear-gradient(black, white)' }}
    >
      <div
        className="container"
        style={{ paddingRight: '15px', paddingLeft: '15px' }}
      >
        <span className="">© Bryant Patton 2020</span>
      </div>
    </footer>
  )
}
export default Footer
