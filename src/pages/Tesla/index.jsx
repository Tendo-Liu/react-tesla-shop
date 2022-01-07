import React, { memo } from "react";
import Scroll from '../../baseUI/scroll'
// import './Server.style.js'
import { connect } from 'react-redux'


const Tesla = (props) => {

  // const { tesladata } = props

  return (
    <>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div>
          Tesla
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

export default connect(mapStateToPorps, {})(memo(Tesla))