import React, { memo, useEffect } from "react";
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import RotationChart from '../../components/main/rotationChart/RotationChart'
import { Main } from './index.style';
import { renderRoutes } from 'react-router-config';



const Tesla = (props) => {

  // console.log(props.route.routes)
  let { route } = props
  
  // state
  const { tesladata } = props
  // action
  const { getMainDataDispatch } = props

  const { rotationImg = [] } = tesladata

  // 检测redux中状态的变化，只要变化，就更新页面
  useEffect(() => {
    if (!tesladata.length) {
      // 函数内容为下面的 dispatch(actionCreators.getMainData())
      getMainDataDispatch()
    }
  }, [])

  return (
    <Main>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div>
          <RotationChart rotationImg={rotationImg}/>
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