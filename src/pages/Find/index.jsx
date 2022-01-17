import React, { useState, useEffect, memo } from "react";
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Main } from "./index.style";
import Lazyload, { forceCheck } from 'react-lazyload'
import loading from '../../assets/Images/1.gif'
import loading2 from '../../assets/Images/loading.gif'
import { debounce } from "../../api/utils";

const Find = (props) => {

  let [page, setPage] = useState(1)

  // state
  const { finddata } = props

  // action
  const { getFindDataDispatch } = props

  const [isLoading, setIsLoading] = useState(false)

  const { newsList = [] } = finddata

  // 判断仓库是否为空，空则getFindDataDispatch()，page改变重新渲染页面
  useEffect(() => {
    if (!finddata.length) {
      getFindDataDispatch(page)
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [page])

  // 上拉加载更多
  const handlePullUp = () => {
    if (isLoading) return ;
    setPage(++page)
    setIsLoading(true)
  }

  // 下拉刷新
  const handlePullDown = () => {

  }

  return (
    <Main>
      <div className="title">推荐</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
        pullUp={handlePullUp}
        pullDown={handlePullDown}
        onScroll={
          () => {
            setTimeout(() => {
              forceCheck()
            }, 500)
          }
        }
      >
        <div className="container">
          <div className="teslaFind">
            <img src='https://china-community-app.tesla.cn/community-media/de6f422a-4c62-4a90-a5b0-c7460783bf4b.png' />
          </div>
          <div className="teslaNews">
            {
              newsList.map((item, index) => {
                return (
                  <div className="news" key={index}>
                    <div className="newsLeft">
                      <h1>{item.title}</h1>
                      <p>{item.date}</p>
                    </div>
                    <div className="newsRight">
                      <Lazyload
                        height={100}
                        placeholder={
                          <img width="100%" height="100%" src={loading} />
                        }
                      >
                        <img src={item.picUrl} />
                      </Lazyload>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Scroll>
      <div className={isLoading ? 'pullUpLoading' : ''}>
        <img src={loading2} />
      </div>
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
