import * as React from "react"
import { graphql } from "gatsby"
import { Watermark } from 'antd'
import BreadcrumbSite from '../components/Breadcrumb'
import '../styles/content-template.scss'

const BlogPostTemplate = ({data}) => {

    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <>
            <Watermark content="chaohangweb.cn" gap={[150, 150]}>
                <BreadcrumbSite classification={frontmatter.categories} detailPage={frontmatter.title} />
                <div className="content-template">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </Watermark>
        </>
    )
}

export const pageQuery = graphql`
    query($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                categories
                date(formatString: "YYYY-MM-DD")
                tags
                title
            }
        }
    }
`

export default BlogPostTemplate