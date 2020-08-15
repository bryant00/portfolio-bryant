import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LayoutDefault from '../components/layouts/LayoutDefault'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Cv = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  return (
    <LayoutDefault page="default">
      <Container style={{ padding: '77px 0 0' }}>
        <Row>
          <Col className="d-flex  justify-content-center">
            <Document
              file="/bryant_cv.pdf"
              onLoadError={(e) =>
                console.log('Error while loading document! ' + e.message)
              }
              onSourceError={(e) =>
                console.log('Error while loading document! ' + e.message)
              }
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </Col>
        </Row>
      </Container>
    </LayoutDefault>
  )
}

export default Cv
