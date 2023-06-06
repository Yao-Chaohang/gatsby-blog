import * as React from "react"
import ContentCard from "../components/ContentCard"
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <main className="home">
      <div className="content">
        <ContentCard name='超航' title="标题占位title" time='2023-06-05' source='代码人生' tags={['标签1', '标签2']}>
          {
            {
              'description': <span>描述信息</span>
            }
          }
        </ContentCard>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>gatsby首页</title>
