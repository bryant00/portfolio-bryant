import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LayoutDefault from '../components/layouts/LayoutDefault'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Cv = () => {
  return (
    <LayoutDefault page="default">
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
    </LayoutDefault>
  )
}

export default Cv
