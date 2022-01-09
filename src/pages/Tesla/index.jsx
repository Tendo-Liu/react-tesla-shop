import React, { memo, useEffect } from "react";
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import RotationChart from '../../components/main/rotationChart/RotationChart'


const Tesla = (props) => {

  // console.log(props)
  
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
    <>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div>
          <RotationChart rotationImg={rotationImg}/>
        </div>
      </Scroll>
    </>
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