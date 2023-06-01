import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'
import '../styles/banner.scss'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'

const Banner = () => {
  
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#banner-image-id') ,
      intensity: 0.3,
      image1: banner1,
      image2: banner2,
      displacementImage: banner2
    })
  })

  return (
    <div className='banner'>
      <div id='banner-image-id' className='banner-image'></div>
    </div>
  )
}

export default Banner