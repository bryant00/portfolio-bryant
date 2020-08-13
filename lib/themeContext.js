import Author from '../svgs/author.svg'
import AuthorLight from '../svgs/authorLight.svg'
import GitHub from '../svgs/github.svg'
import GitHubDark from '../svgs/githubDark.svg'

import React, { createContext } from 'react'

export const theme = {
  heroClass: '',
  title: 'Bryant Patton Portfolio',
  pageName: '',
  useNavShrink: false,
}

export const themes = {
  default: {
    useNavShrink: false,
    pageName: 'default',
    heroClass: '',
    navClass: 'navbar-light bg-light text-dark  p-0 shadow-lg',
    title: 'Default Title',
    gitHubImage: GitHubDark,
    authorImage: Author,
    navShrink: false,
    authorImageDark: Author,
    gitHubImageDark: GitHubDark,
    authorImageLight: AuthorLight,
    gitHubImageLight: GitHub,
  },
  index: {
    useNavShrink: true,
    pageName: 'index',
    heroClass: 'index-header text-light',
    navClass: 'navbar-dark text-white bg-transparent p-2 navhead',
    title: 'Bryant Patton Portfolio',
    gitHubImage: GitHub,
    authorImage: AuthorLight,
    navShrink: false,
    authorImageDark: Author,
    gitHubImageDark: GitHubDark,
    authorImageLight: AuthorLight,
    gitHubImageLight: GitHub,
  },
}

export const ThemeContext = createContext(themes.index)
export const DispatchContext = createContext()
ThemeContext.displayName = 'BryantsThemeContext'
DispatchContext.displayName = 'BryantsDispatchContext'
// console.dir(ThemeContext)

export function navReducer(state, action) {
  switch (action.type) {
    case 'shrink':
      return {
        ...state,

        navClass: 'navbar-light bg-light text-dark  p-0 shadow-lg',
        navShrink: true,
        authorImage: Author,
        gitHubImage: GitHubDark,
      }
    case 'grow':
      return {
        ...state,
        navClass: 'navbar-dark text-white bg-transparent p-2 navhead',
        navShrink: false,
        authorImage: AuthorLight,
        gitHubImage: GitHub,
      }
    default:
      throw new Error()
  }
}
