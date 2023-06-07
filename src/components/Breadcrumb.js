import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'gatsby'
import { formatType } from '../utils'
import '../styles/breadcrumb.scss'

const BreadcrumbSite = (props) => {
    const [item, setItem]  = useState([{title: <Link to='/'>首页</Link>}])

    useEffect(() => {
        if (props.classification && !props.detailPage) {
            const temItems = [{title: <Link to='/'>首页</Link>}, { title: formatType(props.classification)}]
            setItem(temItems)
        } else {
            const temItems = [{title: <Link to='/'>首页</Link>}, { title: <Link to={`/${props.classification}`}>{formatType(props.classification)}</Link>}, { title: props.detailPage }]
            setItem(temItems)
        }
    }, [props])

    return (
        <div className="breadcrumb">
            <Breadcrumb items={item} />
        </div>
    )
}

export default BreadcrumbSite