import React, { useEffect, memo } from "react";
import Scroll from '../../baseUI/scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { Main } from './index.style';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { useHistory } from "react-router-dom";


const Shop = (props) => {

  const { route } = props

  // state
  const { shopdata } = props

  // action
  const { getShopDataDispatch } = props

  const { TZONE = [] } = shopdata

  const history = useHistory()

  const goDetail = (item) => {
    history.push({ pathname: `/shop/teslaZone/${item.id}`, state: item })
  }

  const goShop = () => {
    history.push({ pathname: '/shop/teslaShop', state: shopdata })
  }

  useEffect(() => {
    if (!shopdata.length) {
      getShopDataDispatch()
    }
  }, [])

  useEffect(() => {
    // 防止刷新swiper样式丢失
    setTimeout(() => {
      new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20
      });
    }, 100)
  }, [])

  return (
    <Main>
      <div className="title">特斯拉Tesla</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div>
          <div className="teslaShop" onClick={() => goShop()}>
            <img src="https://china-community-app.tesla.cn/wechatmini/shop.png"/>
          </div>
          <div className="swiper-container">
            <p>T - ZONE</p>
            <div className="swiper-wrapper">
              {
                TZONE.map((item, _) => {
                  // 要记得return
                  return (
                    <div key={item.id} className="swiper-slide">
                      <img src={item.picUrl} onClick={() => goDetail(item)}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Scroll>
      {/* 一定要开启子路由 */}
      {renderRoutes(route.routes)}
    </Main>
  )
}

const mapStateToPorps = (state) => {
  return {
    shopdata: state.shop.shopdata
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getShopDataDispatch() {
      dispatch(actionCreators.getShopData())
    }
  }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Shop))