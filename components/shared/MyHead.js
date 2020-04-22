import React, { useState, useEffect, useContext } from 'react'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
// Stylings

export function MyHead() {
  const title = 'Bryant Patton Portfolio'
  return (
    <Head>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  )
}