// import Author from '../svgs/author.svg'
// import AuthorLight from '../svgs/authorLight.svg'
// import GitHub from '../svgs/github.svg'
// import GitHubDark from '../svgs/githubDark.svg'
import {
  faGithub,
  faLinkedin,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import React, { createContext } from 'react'
const bucket = 'https://bryantpatton-images.s3.us-west-1.amazonaws.com'
const Author = bucket + '/nav/author.svg'
const AuthorLight = bucket + '/nav/authorLight.svg'
export const theme = {
  heroClass: '',
  title: 'Bryant Patton Portfolio',
  pageName: '',
  useNavShrink: true,
}

export const themes = {
  default: {
    useNavShrink: false,
    pageName: 'default',
    heroClass: '',
    navClass: 'navbar-light bg-light text-dark p-0 shadow-lg',
    title: 'Bryant Patton Portfolio',
    gitHubImage: faGithub,
    authorImage: Author,
    faLinkedin: faLinkedin,
    faEnvelope: faEnvelope,
    dark: {
      authorImage: Author,
      gitHubImage: faGithub,
    },
    light: {
      authorImage: AuthorLight,
      gitHubImage: faGithub,
    },
  },
  index: {
    useNavShrink: true,
    pageName: 'index',
    heroClass: 'index-header text-light',
    navClass: 'navbar-dark text-white bg-transparent p-0 navhead',
    title: 'Bryant Patton Portfolio',
    gitHubImage: faGithub,
    authorImage: AuthorLight,
    dark: {
      authorImage: Author,
      gitHubImage: faGithub,
    },
    light: {
      authorImage: AuthorLight,
      gitHubImage: faGithub,
    },
    faLinkedin: faLinkedin,
    faEnvelope: faEnvelope,
  },
}

export const ThemeContext = createContext(themes.index)

ThemeContext.displayName = 'BryantsThemeContext'
