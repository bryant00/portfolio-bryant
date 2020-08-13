import { useEffect, useRef, useCallback } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import { Document, Page, pdfjs } from 'react-pdf'
// import { Document, Page } from 'react-pdf/dist/entry.webpack'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Cv = () => {
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
