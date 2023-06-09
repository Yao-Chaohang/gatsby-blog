import React, { useState, useEffect } from 'react'
import hoverEffect from 'hover-effect'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Menu, Avatar, Input, Drawer,Tour } from 'antd'
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
  const [isShowTour, setIsShowTour] = useState(false)

  const items = edges[0].node.nav.map(item => {
    return {
      label: item.label,
      key: item.path
    }
  })

  const tourSteps = [
    {
      title: '首页',
      description: '网站文章所有内容，根据最新更新时间排列',
      target: () => document.querySelectorAll('.ant-menu-overflow-item')[0]
    },
    {
      title: '代码人生',
      description: '这里展示的内容全部是有关编程代码的一些文章列表',
      target: () => document.querySelectorAll('.ant-menu-overflow-item')[1]
    },
    {
      title: '生活圈',
      description: '这里展示的内容为生活的所见所闻、生活趣事、分享生活这类相关的内容',
      target: () => document.querySelectorAll('.ant-menu-overflow-item')[2]
    },
    {
      title: '标签云',
      description: '这里将网站内所有的标签统一归类展示了出来，可以根据标签快速找到相关的文章',
      target: () => document.querySelectorAll('.ant-menu-overflow-item')[3]
    },
    {
      title: '友情链接',
      description: '这里展示了作者认为好用且可以提高效率的一些网站以及自己的一些开源项目链接',
      target: () => document.querySelectorAll('.ant-menu-overflow-item')[4]
    },
    {
      title: '关于更多作者信息',
      description: '点击此按钮来查看作者的更多信息',
      target: () => document.getElementById('get-user-info')
    }
  ]

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

  useEffect(() => {
    const host = window.location.host
    const path = window.location.href.replace('http://','').replace('https://','').replace(host, '')
    const navList = items.map(item => {
      if (item.key !== '/') {
        return `${item.key}/`
      } else {
        return item.key
      }
    })
    const current = navList.find(item => item === path)
    if (current) {
      if (current === '/') {
        setCurrent('/')
      } else {
        setCurrent(current.substring(0, current.length - 1))
      }
    }
  })

  return (
    <header className='header'>
      <div className='header-left'>
        <div className='menu-icon'>
          <AlignLeftOutlined style={{ fontSize: '24px' }} onClick={showDrawer} />
        </div>
        <div className='logo'><StaticImage src='../images/logo.png' alt='logo' /></div>
        <nav className='nav'>
        <Menu onClick={menuClick} selectedKeys={[current]} mode='horizontal' items={items} />
        </nav>
      </div>
      <div className='header-right'>
        <div className='help'>
          <button onClick={() => setIsShowTour(true)}>帮助</button>
        </div>
        <div className='search'>
        <Search placeholder='搜索' onSearch={onSearch} />
        </div>
        <div className='user'>
          <Avatar size='large' icon={<UserOutlined />} />
        </div>
      </div>

      <Drawer
        rootClassName='menu-drawer'
        placement='left'
        closable={true}
        onClose={onClose}
        open={openDrawer}
        key='left'
        width='70%'
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
              <StaticImage src='../images/avatar.jpg' alt='logo' />
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

      <Tour open={isShowTour} onClose={() => setIsShowTour(false)} steps={tourSteps} />
    </header>
  )
}

export default Header