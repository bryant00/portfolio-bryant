import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import { Document, Page } from 'react-pdf'

const Cv = () => {
  // theme.title = 'Preview of my CV'
  // theme.pageName = 'cv'

  return (
    <Layout page="default">
      <Document
        file={{
          url: '/bryant_cv.pdf',
        }}
        onLoadError={(e) =>
          console.log('Error while loading document! ' + e.message)
        }
        onSourceError={(e) =>
          console.log('Error while loading document! ' + e.message)
        }
      >
        <Page pageNumber={1} />
      </Document>
    </Layout>
  )
}

export default Cv
