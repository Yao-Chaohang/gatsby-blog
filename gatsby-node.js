// gatsby-node.js
const path = require("path")

// 创建文章详情页
async function createPages({ graphql, actions }) {
    // 获取模板绝对路径
    const template = require.resolve("./src/pages/template.js")
    // 获取组件所需数据
    // 注意此处的 graphq 和 组件中使用的 graphql 传参方式不一样
    const { data } = await graphql(`
        query {
            allMarkdownRemark {
                nodes {
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    // 根据模板和数据创建页面
    const { createPage } = actions
    data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: `/${node.fields.slug}`, // 页面访问地址
            component: template, // 模板绝对路径
            // 组件中使用的查询命令可以通过 `$slug` 接收传递给页面的参数
            context: {
                slug: node.fields.slug,
            },
        })
    })
}

// 为数据节点添加属性
function onCreateNode({ node, actions }) {
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md")
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
}

module.exports = { createPages, onCreateNode }

