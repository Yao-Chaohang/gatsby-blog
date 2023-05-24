import * as React from "react"
import { Button } from 'antd'

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-3xl text-blue-500 font-bold underline">我的gatsby第一个站点！</h1>
      <Button>Primary Button</Button>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>gatsby首页</title>
