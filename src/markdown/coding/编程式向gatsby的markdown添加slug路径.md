---
title: "编程式向gatsby的markdown添加slug路径"
date: "2023-06-06"
author: "超航"
tags:
 - "前端开发"
categories: "coding"
---

最开始是想用手动添加slug的方式来添加路径的，也不是很费事。但是出现了中文路径出现匹配有问题的情况，无奈还是需要用编程插件式的添加slug，中文路径匹配的问题解决~

上代码：
```js
// gatsby-config.js
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // siteMetadata 对象用于配置网站元数据
  siteMetadata: {
    title: "Hello Gatsby",
    author: "Jone",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem", // 插件名
      options: {
        // 分类名称，用于区分不同数据，可以不设置
        name: "json",
        // 插件将转化 path 文件夹下的 json 文件
        // 最终以<文件名Json>为数据名存储到数据层
        path: `${__dirname}/json/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/posts/`,
      },
    },
    // 不需要特殊配置的可以直接放到 plugin 数组中
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
```

> 亲测可用，参考文章：https://blog.csdn.net/u012961419/article/details/119041682，文章中还有很多的细节。