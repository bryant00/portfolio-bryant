import React, { useState } from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import { Document, Page, pdfjs } from 'react-pdf'
import CvActions from '../components/shared/CvActions'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Cv = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }
  return (
    <Layout page="default">
      <Jumbotron fluid className="cv-jumbotron">
        <div className="container">
          <h1 className="display-4">Resume/CV</h1>
          <p className="lead">
            View, download, share my resume and send me a note.
          </p>
        </div>
      </Jumbotron>
      <Container fluid className="mb-2 cv-container">
        <Row className="">
          <Col className="col-11 mx-auto col-md-8 ml-md-auto  mr-md-0 order-md-1 d-flex  justify-content-center resume">
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
              <Page
                pageNumber={pageNumber}
                renderMode="svg"
                renderTextLayer={false}
              />
              <div className="page-controls">
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >
                  ‹
                </button>
                <span>
                  {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </span>
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >
                  ›
                </button>
              </div>
            </Document>
          </Col>
          <CvActions />
        </Row>
      </Container>
    </Layout>
  )
}

export default Cv
