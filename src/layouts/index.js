import * as React from "react"
import Header from '../components/Header'
import Banner from '../components/Banner'
import '../styles/layout.scss'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Banner />
            <div className="layout-body">
                <div className='website-left'></div>
                <div className='website-right'>{children}</div>
            </div>
        </div>
    )
}

export default Layout