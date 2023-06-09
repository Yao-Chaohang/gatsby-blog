import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import { Watermark } from 'antd'
import { formatType } from '../utils'
import '../styles/content-card.scss'

const ContentCard = (props) => {
    const { name, time, title, source, tags, slug, children } = props
    return (
        <div className="content-card">
            <div className="content-card-header">
                <div className='avatar'>
                    <StaticImage src="../images/avatar.jpg" alt="avatar" />
                </div>
                <div className='user'>
                    <h5>{name || ''}</h5>
                    <span>{time || ''}</span>
                </div>
            </div>
            <Watermark content="chaohangweb.cn" gap={[50, 50]}>
                <div className='content-card-title'>
                    {/* <span className='content-type'>
                        { type === '0' ? <span className='transshipment'>[转载]</span> : <span className='original'>[原创]</span> }
                    </span> */}
                    <span className='title'>
                        <Link to={`/${slug}`}>
                            {title || ''}
                        </Link>
                    </span>
                    <span className='source-nav'># {formatType(source) || ''}</span>
                </div>
                <div className='content-card-description'>{children.description || ''}</div>
                <div className='content-card-tags'>
                    {
                        tags && tags.map((tag, index) => {
                            return (
                                <span key={index} className='content-card-tag'># {tag}</span>
                            )
                        })
                    }
                </div>
            </Watermark>
        </div>
    )
}

export default ContentCard