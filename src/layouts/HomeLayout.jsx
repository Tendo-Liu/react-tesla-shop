import React, { useEffect, useRef } from 'react'
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';
import { Tab, TabItem } from './HomeLayout.style';
import { actionCreators } from '../pages/Tesla/store'
import { connect } from 'react-redux'
import find from '../assets/Icon-font/find.png'
import findActive from '../assets/Icon-font/findActive.png'
import tesla from '../assets/Icon-font/tesla.png'
import teslaActive from '../assets/Icon-font/teslaActive.png'
import map from '../assets/Icon-font/map.png'
import mapActive from '../assets/Icon-font/mapActive.png'
import activity from '../assets/Icon-font/activity.png'
import activityActive from '../assets/Icon-font/activityActive.png'


function Home(props) {

    const { route } = props;

    const { index, changeIndexDispatch } = props


    // const style = {
    //     bgd: {
    //         backgroundImage: `url(${find})`,
    //         backgroundSize: '100%,100%',
    //         height: '35px',
    //         width: '35px',
    //         backgroundRepeat: 'no-repeat',
    //     },
    //     activeBgd: {
    //         color: 'rgba(0,0,0,.25)',
    //         backgroundImage: `url(${findActive})`,
    //         backgroundSize: '35%,35%',
    //         backgroundRepeat: 'no-repeat'
    //     }
    // }

    // 操作DOM改变icon
    // const changeIcon = (e) => {
    //     console.dir(e)
    //     e.isPropagationStopped()
    //     // dir 打印标签
    //     let tagName = e.target.localName
    //     console.log(tagName)
    //     // switch (tagName) {
    //     //     case 'div': 
    //     //         e.target.children[0].children[0].src = findActive
    //     //     case 'span':
    //     //         e.target.children[0].src = findActive
    //     //     case 'img':
    //     //         e.target.src = findActive
    //     // }
    // }

    return (
        <>
            <Tab>
                {/* NavLink默认会给点击的标签一个active类名，activeClassName可更改 */}
                <NavLink to="/find" activeClassName="selected">
                    <TabItem onClick={() => { changeIndexDispatch(actionCreators.changeIndex(1)) }}>
                        {
                            index === 1
                                ? <img src={findActive} />
                                : <img src={find} />
                        }
                        <span>发现</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/tesla" activeClassName="selected">
                    <TabItem onClick={() => { changeIndexDispatch(actionCreators.changeIndex(2)) }}>
                        {
                            index === 2
                                ? <img src={teslaActive} />
                                : <img src={tesla} />
                        }
                        <span>
                            Tesla
                        </span>
                    </TabItem>
                </NavLink>
                <NavLink to="/tesMap" activeClassName="selected">
                    <TabItem onClick={() => { changeIndexDispatch(actionCreators.changeIndex(3)) }}>
                        {
                            index === 3
                                ? <img src={mapActive} />
                                : <img src={map} />
                        }
                        <span>
                            地图
                        </span>
                    </TabItem>
                </NavLink>
                <NavLink to="/activity" activeClassName="selected">
                    <TabItem onClick={() => { changeIndexDispatch(actionCreators.changeIndex(4)) }}>
                        {
                            index === 4
                                ? <img src={activityActive} />
                                : <img src={activity} />
                        }
                        <span>
                            活动
                        </span>
                    </TabItem>
                </NavLink>
            </Tab>

            {renderRoutes(route.routes)}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        index: state.tesla.index
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        changeIndexDispatch(index) {
            dispatch(actionCreators.changeIndex(index))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(React.memo(Home))
