import React, { useState, useEffect, createContext, useContext } from 'react'
import fetch from 'isomorphic-unfetch'

// Use a global to save the user, so we don't have to fetch it again after page navigations
export const themes = {
  base: 'port-nav-default',
  index: 'port-nav-index',
}

export const ThemeContext = React.createContext(
  themes // default value
)

ThemeContext.displayName = 'MyThemeContext'
