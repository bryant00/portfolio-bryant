import React, { createContext } from 'react'
import aws from '../svgs/icons/aws.svg'
import django from '../svgs/icons/django.svg'
import email2 from '../svgs/icons/email2.svg'
import github from '../svgs/icons/github.svg'
import html5 from '../svgs/icons/html5.svg'
import linkedin from '../svgs/icons/linkedin.svg'
import nextjs from '../svgs/icons/nextjs.svg'
import python from '../svgs/icons/python.svg'
import redux from '../svgs/icons/redux.svg'
import css3 from '../svgs/icons/css3.svg'
import email from '../svgs/icons/email.svg'
import git from '../svgs/icons/git.svg'
import graphql from '../svgs/icons/graphql.svg'
import javascript from '../svgs/icons/javascript.svg'
import location from '../svgs/icons/location.svg'
import node from '../svgs/icons/node.svg'
import react from '../svgs/icons/react.svg'
import postgressql from '../svgs/icons/PostgreSQL.svg'
import reactNative from '../svgs/icons/reactNative.svg'
import mongoDb from '../svgs/icons/mongoDb.svg'
import bootstrap from '../svgs/icons/bootstrap.svg'
import auth0 from '../svgs/icons/auth0.svg'
import twilio from '../svgs/icons/twilio.svg'
import filePdf from '../svgs/icons/filePdf.svg'
import user from '../svgs/icons/user.svg'
import check from '../svgs/icons/check.svg'

export const icons = {
  aws: { name: 'AWS', image: aws },
  django: { name: 'Django', image: django },
  html5: { name: 'HTML5', image: html5 },
  nextjs: { name: 'NextJS', image: nextjs },
  python: { name: 'Python', image: python },
  redux: { name: 'Redux', image: redux },
  css3: { name: 'CSS', image: css3 },
  git: { name: 'Git', image: git },
  graphql: { name: 'GraphQL', image: graphql },
  javascript: { name: 'Javascript', image: javascript },
  node: { name: 'NodeJS', image: node },
  react: { name: 'React', image: react },
  postgressql: { name: 'PostgresSQL', image: postgressql },
  reactNative: { name: 'React Native', image: reactNative },
  twillio: { name: 'Twilio', image: twilio },
  auth0: { name: 'Auth0', image: auth0 },
  bootstrap: { name: 'Bootstrap', image: bootstrap },
  mongoDb: { name: 'MongoDB', image: mongoDb },
  fontAwesome: {
    email2: { name: 'email2', image: email2 },
    email: { name: 'email', image: email },
    location: { name: 'location', image: location },
    linkedin: { name: 'LinkedIn', image: linkedin },
    github: { name: 'GitHub', image: github },
    filePdf: { name: 'PDF', image: filePdf },
    user: { name: 'user', image: user },
    check: { name: 'check', image: check },
  },
}

export const IconsContext = createContext(icons)

IconsContext.displayName = 'IconContext'
