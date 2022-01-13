import * as actionType from './constants.js';
import { reqmain } from '../../../api/index'

export const changeIndex = (data) => {
    return {
        type: actionType.CHANGE_INDEX,
        data: data,
    }
}

export const changeMainData = (data) => {
    return {
        type: actionType.CHANGE_TESLADATA,
        data: data
    }
}

// 这里的getMainData直接暴露到 import { actionCreators } from './store'就可以拿到
export const getMainData = () => {
    // api 请求 
    // dispatch一个同步任务
    return (dispatch) => {
        reqmain()
            .then((res) => {
                // console.log(res);
                dispatch(changeMainData(res.data.data))
            })
            .catch((e) => {
                console.log('出错了');
            })
    }
}

export const setColorIndex = (data) => {
    return {
        type: actionType.SET_COLORINDEX,
        data: data,
    }
}

export const setWheelIndex = (data) => {
    return {
        type: actionType.SET_WHEELINDEX,
        data: data,
    }
}