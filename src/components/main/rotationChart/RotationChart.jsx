import React, { useEffect } from 'react';
import { Rotation } from './RotationChart.style.js'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

const RotationChart = (props) => {

  const { rotationImg } = props

  useEffect(() => {
    setTimeout(() => {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 1000,

        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }, 100);
  }, [])

  return (
    <Rotation>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            rotationImg.map((item, index) => {
              return (
                <div
                  className="swiper-slide"
                  key={index}
                >
                  <span>{item.name}</span>
                  <a>
                    <img className='rotationChart-img' src={item.picUrl} alt="" />
                  </a>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Rotation>
  );
}

export default RotationChart;