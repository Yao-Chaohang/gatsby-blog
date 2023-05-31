import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Menu, Avatar, Input } from 'antd'
import { UserOutlined, AlignLeftOutlined } from '@ant-design/icons'
import '../styles/header.scss'

const { Search } = Input;

const Header = () => {
  const { allDataJson: { edges } } = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            nav {
              path
              label
            }
          }
        }
      }
    }
  `)
  
  const [current, setCurrent] = useState('/')

  const items = edges[0].node.nav.map(item => {
    return {
      label: item.label,
      key: item.path
    }
  })

  const menuClick = (e) => {
    setCurrent(e.key)
  }

  const onSearch = (value) => console.log(value)

  return (
    <header className='header'>
      <div className='header-left'>
        <div className='menu-icon'>
          <AlignLeftOutlined style={{ fontSize: '24px' }} />
        </div>
        <div className='logo'><StaticImage src="../images/logo.png" alt="logo" /></div>
        <nav className='nav'>
        <Menu onClick={menuClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </nav>
      </div>
      <div className='header-right'>
        <div className='search'>
        <Search placeholder="搜索" onSearch={onSearch} style={{ width: 200 }} />
        </div>
        <div class='user'>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </div>
    </header>
  )
}

export default Header