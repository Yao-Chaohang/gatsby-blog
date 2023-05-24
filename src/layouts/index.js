import * as React from "react"

const Layout = ({ children }) => {
    return (
        <div>
            <header>头部</header>
            {children}
        </div>
    )
}

export default Layout