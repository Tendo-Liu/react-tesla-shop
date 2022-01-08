/**
 * 1. 该文件是用于创建一个Tesla组件服务的reducer，reducer的本质就是一个纯函数
 * 2. reducer函数会接到两个参数，分别为：之前的状态（state），动作对象（action）
 */

import * as actionTypes from './constants';

// 初始化状态
const defaultstate = {
    tesladata: [],
    index: 2
}

const reducer = (state = defaultstate, action) => {
    //根据type决定如何加工数据
    switch (action.type) {
        case actionTypes.CHANGE_TESLADATA:
            return { ...state, tesladata: action.data }
        case actionTypes.CHNAGE_INDEX:
            return action.index
        default:
            return state;
    }
}
export default reducer;