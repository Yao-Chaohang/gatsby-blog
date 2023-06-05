import * as React from "react"
import Header from '../components/Header'
import Banner from '../components/Banner'
import UserInfo from "../components/UserInfo"
import Card from '../components/Card'
import '../styles/layout.scss'

// 模拟公告
const announcement = [
    {
        time: '2023-6-4',
        content: '测试公告列表1'
    },
    {
        time: '2023-6-4',
        content: '测试公告列表2'
    },
    {
        time: '2023-6-4',
        content: '测试公告列表3'
    },
    {
        time: '2023-6-4',
        content: '测试公告列表4'
    },
    {
        time: '2023-6-4',
        content: '测试公告列表5'
    },
    {
        time: '2023-6-4',
        content: '测试公告列表6'
    }
]

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Banner />
            <div className="layout-body">
                <div className='website-left'>
                    <UserInfo />
                    <div className="site-info-left">
                        <Card title="站点公告" english-title="Site announcement">
                            <div className="announcement">
                                <ul>
                                    {
                                        announcement && announcement.map(item => {
                                            return (
                                                <li key={item.content}>{item.time}  {item.content.length > 15 ? item.content.substring(0, 14) + '...' : item.content}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className='website-right'>{children}</div>
            </div>
        </div>
    )
}

export default Layout