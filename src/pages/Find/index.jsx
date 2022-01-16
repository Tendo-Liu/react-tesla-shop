import React, { useState, useEffect, memo } from "react";
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Main } from "./index.style";
import Lazyload, { forceCheck } from 'react-lazyload'

const Find = (props) => {

  let [page, setPage] = useState(1)

  // state
  const { finddata } = props

  // action
  const { getFindDataDispatch } = props

  const { newsList = [] } = finddata

  // 判断仓库是否为空，空则getFindDataDispatch()
  useEffect(() => {
    if (!finddata.length) {
      getFindDataDispatch(page)
    }
  }, [])

  return (
    <Main>
      <div className="title">推荐</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div className="container">
          <div className="teslaFind">
            <img src='https://china-community-app.tesla.cn/community-media/de6f422a-4c62-4a90-a5b0-c7460783bf4b.png' />
          </div>
          <div className="teslaNews">
            {
              newsList.map((item, _) => {
                return (
                  <div className="news" key={item.id}>
                    <div className="newsLeft">
                      <h1>{item.title}</h1>
                      <p>{item.date}</p>
                    </div>
                    <img src={item.picUrl} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </Scroll>
    </Main>
  )
}


const mapStateToPorps = (state) => {
  return {
    finddata: state.find.finddata
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getFindDataDispatch(page) {
      dispatch(actionCreators.getFindData(page))
    }
  }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Find))
