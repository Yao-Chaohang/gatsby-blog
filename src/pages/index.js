import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import ContentCard from "../components/ContentCard"
import '../styles/index.scss'

const IndexPage = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              author
              tags
              categories
            }
          }
        }
      }
    }
  `)

  const contentList = edges

  return (
    <main className="home">
      <div className="content">
        {
          contentList && contentList.map((item, index) => {
            return (
              <ContentCard key={index}
                name={item.node.frontmatter.author}
                title={item.node.frontmatter.title}
                time={item.node.frontmatter.date}
                source={item.node.frontmatter.categories}
                tags={item.node.frontmatter.tags}
              >
                {
                  {
                    'description': <span>描述信息</span>
                  }
                }
              </ContentCard>
            )
          })
        }
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>gatsby首页</title>
