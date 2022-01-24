import React, { useState } from "react";
import Scroll from '../../../baseUI/scroll'
import { Container } from './index.style'

const TeslaShop = (props) => {

  const [currentColor, setCurrentColor] = useState('white')
  const [currentBgColor, setCurrentBgColor] = useState('#2B2D2E')

  const { state } = props.location

  const { goods = [] } = state

  const showHeader = (e) => {
    // console.log(e.y)
    if (e.y < -90) {
      setCurrentColor('black')
      setCurrentBgColor('white')
    } else {
      setCurrentColor('white')
      setCurrentBgColor('#2B2D2E')
    }
  }

  console.log(goods)

  return (
    <Container>
      <div className="back" onClick={() => history.go(-1)}>
        <svg t="1641971935225" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="200" height="200"><path d="M738.145103 170.248828 663.234207 95.337931 313.114483 445.457655 312.937931 445.298759 238.768552 519.450483 238.945103 519.627034 238.768552 519.785931 313.679448 594.696828 313.838345 594.537931 658.996966 939.696552 733.166345 865.509517 388.007724 520.368552Z" p-id="2479" fill="#6F6F6F"></path></svg>
      </div>
      <div className="title">Tesla 官方商店 | Tesla</div>
      <div className="shop-header" style={{ backgroundColor: `${currentBgColor}`, color: `${currentColor}` }}>
        <div className="shop-header-left">
          <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill={currentColor}></path></svg>
          <span>|</span>
          <span>商店</span>
        </div>
        <div className="shop-header-right">
          <svg viewBox="0 0 1024 1024" p-id="7071"><path d="M289.92 768c2.56 0 632.32 0 639.36 0 14.72 0 26.24-12.8 28.16-28.8 0 0 43.52-244.48 64-413.44C1027.2 279.04 1004.8 256 961.92 256L264.96 256 253.44 156.16C251.52 140.8 240.64 128 226.56 128 224.64 128 97.92 128 97.92 128c-17.92 0-32 14.08-32 32 0 17.92 14.08 32 32 32l99.84 0 64.64 547.2C263.68 755.2 275.84 768 289.92 768zM960.64 320c-17.28 135.68-46.08 316.16-57.6 384L318.08 704 272.64 320 960.64 320zM321.92 832c-35.2 0-64 28.8-64 64 0 35.2 28.8 64 64 64 35.2 0 64-28.8 64-64C385.92 860.8 357.12 832 321.92 832zM897.92 832c-35.2 0-64 28.8-64 64 0 35.2 28.8 64 64 64 35.2 0 64-28.8 64-64C961.92 860.8 933.12 832 897.92 832z" p-id="7072" fill={currentColor}></path></svg>
          <span>导航栏</span>
        </div>
      </div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
        onScroll={showHeader}
      >
        <div>
          <div className="charge">
            <div className="charge-text">
              <h1>点击购买 家庭充电服务包</h1>
              <h2>随时在家为特斯拉充电</h2>
            </div>
          </div>
          <div className="section-title">
            <h3>畅销商品</h3>
            <a>查看全部</a>
          </div>
          <div className="goodsList">
            {
              goods.map((item, index) => {
                return (
                  <div key={item.id} className="goods" >
                    <div className="goodsName">
                      <h3 style={{ color: `${item.color}`}}>{item.title}</h3>
                    </div>
                    <img src={item.picUrl} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </Scroll>
    </Container>
  )
}

export default TeslaShop