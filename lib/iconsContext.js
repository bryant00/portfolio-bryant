import React, { createContext } from 'react'
const bucket = 'https://bryantpatton-images.s3.us-west-1.amazonaws.com'
// import aws from '../svgs/icons/aws.svg'
const aws = bucket + '/icons/aws.svg'
const django = bucket + '/icons/django.svg'
const email2 = bucket + '/icons/email2.svg'
const github = bucket + '/icons/github.svg'
const html5 = bucket + '/icons/html5.svg'
const linkedin = bucket + '/icons/linkedin.svg'
const nextjs = bucket + '/icons/nextjs.svg'
const python = bucket + '/icons/python.svg'
const redux = bucket + '/icons/redux.svg'
const css3 = bucket + '/icons/css3.svg'
const email = bucket + '/icons/email.svg'
const git = bucket + '/icons/git.svg'
const graphql = bucket + '/icons/graphql.svg'
const javascript = bucket + '/icons/javascript.svg'
const location = bucket + '/icons/location.svg'
const node = bucket + '/icons/node.svg'
const react = bucket + '/icons/react.svg'
const postgressql = bucket + '/icons/PostgreSQL.svg'
const reactNative = bucket + '/icons/reactNative.svg'
const mongoDb = bucket + '/icons/mongoDb.svg'
const bootstrap = bucket + '/icons/bootstrap.svg'
const auth0 = bucket + '/icons/auth0.svg'
const twilio = bucket + '/icons/twilio.svg'
const filePdf = bucket + '/icons/filePdf.svg'
const user = bucket + '/icons/user.svg'
const check = bucket + '/icons/check.svg'
const downArrow = bucket + '/icons/circleDown.svg'
const googleDrive = bucket + '/icons/googleDrive.svg'
const copy = bucket + '/icons/copy.svg'
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
  actions: {
    downArrow: { name: 'downArrow', image: downArrow },
    googleDrive: { name: 'googleDrive', image: googleDrive },
    copy: { name: 'copy', image: copy },
    filePdf: { name: 'PDF', image: filePdf },
  },
}

export const IconsContext = createContext(icons)

IconsContext.displayName = 'IconContext'
