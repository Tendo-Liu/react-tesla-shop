import React, { useEffect } from 'react';
import { Rotation } from './RotationChart.style.js'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { Link, useHistory } from 'react-router-dom'
import CarInfo from '../../carInfo/CarInfo.jsx';

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

  const goToDetail = (item) => {
    console.log(item);
    history.push({pathname:`/tesla/${item.id}`, state:item})
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
                  <CarInfo res={item}/>
                  <div>
                    <img className='rotationChart-img' src={item.picUrl} alt="" />
                  </div>
                  <button onClick={()=>goToDetail(item)} className='carBuy'>立即订购</button>
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