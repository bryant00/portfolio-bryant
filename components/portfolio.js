import React, { useContext } from 'react'
import PortfolioCard from './portfolios/PortfolioCard'
import useSWR, { mutate } from 'swr'
import { IconsContext } from '../lib/iconsContext'

const fetcher = (url) => fetch(url).then((res) => res.json())

export const PortfolioPage = () => {
  const icons = useContext(IconsContext)
  const { data, error } = useSWR('/api/portfolios', fetcher)
  const Data = ({ data }) => {
    const list = data.map((portfolio, index) => (
      <PortfolioCard key={index} portfolio={portfolio}></PortfolioCard>
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
export default PortfolioPage
