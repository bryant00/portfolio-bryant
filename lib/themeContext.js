import Author from '../svgs/author.svg'
import AuthorLight from '../svgs/authorLight.svg'
import GitHub from '../svgs/github.svg'
import GitHubDark from '../svgs/githubDark.svg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
// import Author from '/images/nav/author.svg'

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
    faLinkedin: faLinkedin,
    faMailBulk: faMailBulk,
  },
  index: {
    useNavShrink: true,
    pageName: 'index',
    heroClass: 'index-header text-light',
    navClass: 'navbar-dark text-white bg-transparent p-2 navhead',
    title: 'Bryant Patton Portfolio',
    gitHubImage: GitHub,
    authorImage: AuthorLight,
    dark: {
      authorImage: Author,
      gitHubImage: GitHubDark,
    },
    light: {
      authorImage: AuthorLight,
      gitHubImage: GitHub,
    },
    faLinkedin: faLinkedin,
    faMailBulk: faMailBulk,
  },
}

export const ThemeContext = createContext(themes.index)

ThemeContext.displayName = 'BryantsThemeContext'
