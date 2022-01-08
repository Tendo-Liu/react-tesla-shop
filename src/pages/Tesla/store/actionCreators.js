import * as actionType from './constants.js';
import { reqmain } from '../../../api/index'

export const changeIndex = (data) => {
    return {
        type: actionType.CHNAGE_INDEX,
        index: data,
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