/**
 * 1. 该文件是用于创建一个Tesla组件服务的reducer，reducer的本质就是一个纯函数
 * 2. reducer函数会接到两个参数，分别为：之前的状态（state），动作对象（action）
 */

import * as actionTypes from './constants';

// 初始化状态
const defaultstate = {
    tesladata: [],
    // 记录tabbar点击高亮
    index: 2,
    // 记录详情页车选择的颜色
    colorIndex: 0,
    // 记录详情页轮子所选择的样式
    wheelIndex: 0
}

const reducer = (state = defaultstate, action) => {
    //根据type决定如何加工数据
    switch (action.type) {
        case actionTypes.CHANGE_TESLADATA:
            return { ...state, tesladata: action.data }
        case actionTypes.CHANGE_INDEX:
            return { ...state, index: action.data }
        case actionTypes.SET_COLORINDEX:
            return { ...state, colorIndex: action.data }
        case actionTypes.SET_WHEELINDEX:
            return { ...state, wheelIndex: action.data }
        default:
            return state;
    }
}
export default reducer;