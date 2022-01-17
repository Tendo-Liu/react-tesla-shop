import React, { memo, useEffect } from "react";
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import RotationChart from '../../components/main/rotationChart/RotationChart'
import { Main } from './index.style';
import { renderRoutes } from 'react-router-config';
import { useHistory } from "react-router-dom";


const Tesla = (props) => {

  let { route } = props

  // state
  const { tesladata } = props

  // action
  const { getMainDataDispatch } = props

  const { rotationImg = [] } = tesladata

  const history = useHistory()

  // 检测redux中状态的变化，只要变化，就更新页面
  useEffect(() => {
    if (!tesladata.length) {
      // 函数内容为下面的 dispatch(actionCreators.getMainData())
      getMainDataDispatch()
    }
  }, [])

  const goToOrder = (rotationImg) => {
    // console.log(item);
    history.push({ pathname: '/tesla/order', state: rotationImg})
  }

  return (
    <Main>
      <div className="title">特斯拉Tesla</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div>
          <RotationChart rotationImg={rotationImg} />
          <div className="teslaDrive">
            <h1>未来驾驶体验</h1>
            <h2>车辆自动召唤，跑车级百公里加速，在车里打游戏，免费到店体验特斯拉驾驶方式</h2>
            <img src="https://china-community-app.tesla.cn/wechatmini/img01.png" />
            <button onClick={() => goToOrder(rotationImg)} className='testDrive'>预约试驾</button>
          </div>
          <div className="teslaGuideBook">
            <h1>新手使用指南</h1>
            <img src="https://china-community-app.tesla.cn/wechatmini/card_bg.png" />
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
    tesladata: state.tesla.tesladata
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getMainDataDispatch() {
      dispatch(actionCreators.getMainData())
    }
  }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Tesla))