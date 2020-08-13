import React, { useState, useContext, useReducer } from 'react'

const Footer = () => {
  return (
    <footer
      className="footer mt-auto py-3 "
      style={{ backgroundColor: '#6c757d' }}
    >
      <div
        className="container"
        style={{ paddingRight: '15px', paddingLeft: '15px' }}
      >
        <span className="text-light">© Bryant Patton 2020</span>
      </div>
    </footer>
  )
}
export default Footer
