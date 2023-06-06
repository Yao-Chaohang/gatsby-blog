import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import '../styles/content-card.scss'

const ContentCard = (props) => {
    const { name, time, title, source, tags, children } = props
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
            <div className='content-card-title'>
                {/* <span className='content-type'>[转载]</span> */}
                <span>{title || ''}</span>
                <span className='source-nav'># {source || ''}</span>
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
        </div>
    )
}

export default ContentCard