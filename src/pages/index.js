import * as React from "react"
import { Button } from 'antd'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-3xl text-blue-500 font-bold underline">我的gatsby第一个站点！</h1>
      <Button>Primary Button</Button>
      <h3 className="test">测试文字</h3>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>gatsby首页</title>
