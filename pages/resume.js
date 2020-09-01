import React from 'react'
import ReactPDF, {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import { Row, Col, Container, Button } from 'react-bootstrap'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)
export default function Resume() {
  return (
    <Container>
      <h1 className="">Resume</h1>
      <Row className="my-5">
        <Col className="border-top mt-2 py-2">
          <MyDocument></MyDocument>
        </Col>
      </Row>
    </Container>
  )
}
