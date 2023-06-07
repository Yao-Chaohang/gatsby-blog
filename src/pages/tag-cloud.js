import React from 'react'
import BreadcrumbSite from '../components/Breadcrumb'
import { graphql, useStaticQuery } from 'gatsby'
import { Tag } from 'antd'
import { TagsOutlined } from '@ant-design/icons'
import '../styles/tag-cloud.scss'

const TagCloud = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query {
        allMarkdownRemark(filter: {frontmatter: {categories: {eq: "coding"}}}) {
            edges {
                node {
                    frontmatter {
                        tags
                    }
                }
            }
        }
        }
    `)

    const { edges } = allMarkdownRemark
    const tags = [].concat(...edges.map(edge => edge.node.frontmatter.tags))

    return (
        <>
            <BreadcrumbSite classification="tag-cloud" />
            <div className='tag-cloud'>
                {
                    tags && tags.map((tag, index) => (<Tag key={index} icon={<TagsOutlined />}>{tag}</Tag>))
                }
            </div>
        </>
    )
}

export default TagCloud