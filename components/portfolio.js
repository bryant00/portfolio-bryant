import React, { useContext, useState, useEffect } from 'react'
import PortfolioCard from './portfolios/PortfolioCard'
import useSWR, { mutate } from 'swr'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { IconsContext } from '../lib/iconsContext'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default () => {
  const icons = useContext(IconsContext)
  const { data, error } = useSWR('/api/portfolios', fetcher)
  const [dataIcons, setDataIcons] = useState(null)
  let [loaded, setLoaded] = useState(false)

  let dataIconsMap = []
  // if (data) {
  //   dataIconsMap = data.reduce((ac, cv) => {
  //     let project = cv
  //     let tech = project['tech']
  //     let techIcons = tech.map((t) => icons[t])
  //     let projectWithIcons = { ...project, techIcons: techIcons }
  //     ac.push(projectWithIcons)
  //     return ac
  //   }, [])
  //   setDataIcons(dataIconsMap)
  // }

  const Data = ({ data }) => {
    const list = data.map((portfolio, index) => (
      <Row key={index} className="my-5">
        <Col className="border-top mt-2 py-2">
          <PortfolioCard portfolio={portfolio}></PortfolioCard>
        </Col>
      </Row>
    ))

    return list
  }
  if (error) {
    console.log(error)
    return <div>Failed to load</div>
  }
  if (!data) return <div>Fetching...</div>
  if (data) {
    let dataIconsMap = data.reduce((ac, cv) => {
      let project = cv
      let tech = project['tech']
      let techIcons = tech.map((t) => icons[t])
      let projectWithIcons = { ...project, techIcons: techIcons }
      ac.push(projectWithIcons)
      return ac
    }, [])
    mutate('/api/portfolios', dataIconsMap, false)
    return (
      <>
        <h1 className="">Projects</h1>
        <Data data={data}></Data>
      </>
    )
  }
}
