import React, { useEffect } from 'react';
import { Rotation } from './RotationChart.style.js'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { Link, useHistory } from 'react-router-dom'

const RotationChart = (props) => {

  const { rotationImg } = props
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }, 100);
  }, [])

  const goToDetail = (id) => {
    // console.log(typeof id);
    history.push(`/tesla/${id}`)
  }

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
                  <a className='carName'>{item.name}</a>
                  <div className='carInfo'>
                    <span>
                      <h1>&nbsp;&nbsp;&nbsp;&nbsp;{item.battery}&nbsp;<a>公里</a></h1>
                      <h2>&nbsp;&nbsp;&nbsp;续航里程（预估)</h2>
                    </span>
                    <span style={{width: '6rem'}}>
                      <h1>&nbsp;&nbsp;{item.speedUp}&nbsp;<a>秒</a></h1>
                      <h2>百公里加速*</h2>
                    </span>
                    <span>
                      <h1>{item.higtSpeed}&nbsp;<a>公里/小时</a></h1>
                      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最高车速+</h2>
                    </span>
                  </div>
                  <div>
                    <img className='rotationChart-img' src={item.picUrl} alt="" />
                  </div>
                  <button onClick={()=>goToDetail(item.id)} className='carBuy'>立即订购</button>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination">

        </div>
      </div>
    </Rotation>
  );
}

export default RotationChart;