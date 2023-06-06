import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/Header'
import Banner from '../components/Banner'
import UserInfo from "../components/UserInfo"
import Card from '../components/Card'
import { CalendarOutlined } from '@ant-design/icons'
import '../styles/layout.scss'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ children }) => {
    const { allDataJson: { nodes } } = useStaticQuery(graphql`
        query {
            allDataJson {
                nodes {
                    announcement {
                        content
                        time
                    }
                }
            }
        }
    `)

    const announcement = nodes[1].announcement

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
                                                <li key={item.content}>
                                                    <CalendarOutlined />
                                                    {item.time}  {item.content.length > 15 ? item.content.substring(0, 14) + '...' : item.content}
                                                </li>
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