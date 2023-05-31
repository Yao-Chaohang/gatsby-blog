import * as React from "react"
import Header from '../components/Header'

const Layout = ({ children }) => {
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e78f173e5720d8454b9f51ec8e34d89a";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout