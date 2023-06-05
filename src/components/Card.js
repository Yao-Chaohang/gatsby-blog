import React from 'react'
import '../styles/card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div className='title-container'>
                <h2 className='title'>{props.title || ''}</h2>
                <h3 className='english-title'>{props['english-title'] || ''}</h3>
            </div>
            {props.children && <div className='card-content'>{props.children}</div>}
        </div>
    )
}

export default Card