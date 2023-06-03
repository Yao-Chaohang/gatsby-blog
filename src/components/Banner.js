import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'
import { StaticImage } from "gatsby-plugin-image"
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import '../styles/banner.scss'

const info = [
  {
    label: '文章数量',
    value: '1200'
  },
  {
    label: '访问数量',
    value: '32000'
  },
  {
    label: '运行天数',
    value: '568'
  },
]

const BasInfoItem = () => {
  return (
    <ul className='bas-info-ul'>
      {
        info.map((item, index) => {
          return (
            <li className='bas-info-li' key={index}>
              <span className='label'>{ item.label }</span>
              <span className='value'>{ item.value }</span>
            </li>
          )
        })
      }
    </ul>
  )
}

const Banner = () => {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#banner-image-id') ,
      intensity: 0.3,
      image1: banner1,
      image2: banner2,
      displacementImage: banner2
    })
  }, [])

  return (
    <div className='banner'>
      <div id='banner-image-id' className='banner-image'></div>
      <div className='website-info'>
        <div className='avatar'>
          <StaticImage src="../images/avatar.jpg" alt="logo" />
        </div>

        <div className='bas-info'>
          <BasInfoItem />
        </div>
      </div>
    </div>
  )
}

export default Banner