import * as React from "react"
import Header from '../components/Header'
import '../styles/layout.scss'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout