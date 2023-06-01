import * as React from "react"
import Banner from '../components/Banner'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <main className="home">
      <Banner />
      <div className="content"></div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>gatsby首页</title>
