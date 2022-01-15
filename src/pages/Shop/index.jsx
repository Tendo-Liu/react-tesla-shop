import React, { useEffect } from "react";
import { Main } from './index.style';
import Scroll from '../../baseUI/scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { renderRoutes } from 'react-router-config';

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";


const Shop = (props) => {

  let { route } = props

  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 20
    });
  }, [])

  return (
    <Main>
      <div className="title">特斯拉Tesla</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div>
          <div className="teslaShop">
            <img src="https://gitee.com/Tendo_Liu/image_hosting/raw/master/shop/23-46-44.jpg" />
          </div>
          <div className="swiper-container">
            <p>T - ZONE</p>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="https://gitee.com/Tendo_Liu/image_hosting/raw/master/shop/scroll2/23-46-47.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://gitee.com/Tendo_Liu/image_hosting/raw/master/shop/scroll2/23-46-50.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://gitee.com/Tendo_Liu/image_hosting/raw/master/shop/scroll2/23-46-53.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://gitee.com/Tendo_Liu/image_hosting/raw/master/shop/scroll2/23-46-55.jpg" />
              </div>
            </div>
          </div>
        </div>
      </Scroll>
      {/* 一定要开启子路由 */}
      {renderRoutes(route.routes)}
    </Main>
  )
}

export default Shop