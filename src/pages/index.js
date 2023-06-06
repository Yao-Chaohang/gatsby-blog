import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import ContentCard from "../components/ContentCard"
import '../styles/index.scss'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
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
            id
            excerpt(format: PLAIN, pruneLength: 80)
          }
        }
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  const contentList = allMarkdownRemark.edges
  contentList.forEach((item, index) => {
    contentList[index].node.slug = allMarkdownRemark.nodes[index].fields.slug
  })

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
                slug={item.node.slug}
              >
                {
                  {
                    'description': <span>{item.node.excerpt}</span>
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
