import React, { useState } from 'react'
import hoverEffect from 'hover-effect'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Menu, Avatar, Input, Drawer } from 'antd'
import { UserOutlined, AlignLeftOutlined, CloseOutlined } from '@ant-design/icons'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
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
  const [openDrawer, setOpenDrawer] = useState(false)

  const items = edges[0].node.nav.map(item => {
    return {
      label: item.label,
      key: item.path
    }
  })

  const menuClick = (e) => {
    onClose()
    setCurrent(e.key)
    navigate(e.key)
  }

  const onSearch = (value) => console.log(value)

  const showDrawer = () => {
    setOpenDrawer(true);
    setTimeout(() => {
      new hoverEffect({
        parent: document.querySelector('.drawer-banner-image') ,
        intensity: 0.3,
        image1: banner1,
        image2: banner2,
        displacementImage: banner2
      })
    })
  }

  const onClose = () => {
    setOpenDrawer(false);
  }

  return (
    <header className='header'>
      <div className='header-left'>
        <div className='menu-icon'>
          <AlignLeftOutlined style={{ fontSize: '24px' }} onClick={showDrawer} />
        </div>
        <div className='logo'><StaticImage src="../images/logo.png" alt="logo" /></div>
        <nav className='nav'>
        <Menu onClick={menuClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </nav>
      </div>
      <div className='header-right'>
        <div className='search'>
        <Search placeholder="搜索" onSearch={onSearch} />
        </div>
        <div className='user'>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </div>

      <Drawer
        rootClassName="menu-drawer"
        placement="left"
        closable={true}
        onClose={onClose}
        open={openDrawer}
        key="left"
        width="70%"
        bodyStyle={{ padding: '0' }}
        headerStyle={{ width: '100%', padding: '5px 10px', border: 'none', position: 'absolute' }}
        closeIcon={
          <span></span>
        }
        extra={
          <CloseOutlined style={{ color: '#ffffff' }} onClick={onClose} />
        }
      >
        <div className='drawer-banner'>
          { openDrawer && <div className='drawer-banner-image'></div> }
          <div className='user'>
            <div className='avatar'>
              <StaticImage src="../images/avatar.jpg" alt="logo" />
            </div>
            <div className='info'>
              <h4>像素脉动</h4>
              <p>60+年前端开发经验</p>
            </div>
          </div>
        </div>
        <div className='drawer-nav'>
          <ul>
            {
              items && items.map(item => {
                return (
                  <li key={item.key} className={current === item.key ? 'active' : ''}>
                    <button onClick={() => menuClick(item)}>{item.label}</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Drawer>
    </header>
  )
}

export default Header