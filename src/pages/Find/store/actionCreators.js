import * as actionType from './constants.js';
import { reqfind } from '../../../api/index'

export const changeFindData = (data) => {
    return {
        type: actionType.CHANGE_FINDDATA,
        data: data
    }
}

export const getFindData = (page) => {
    return (dispatch) => {
        reqfind(page)
            .then((res) => {
                // console.log(res);
                dispatch(changeFindData(res.data.data))
            })
            .catch((e) => {
                console.log('出错了');
            })
    }
}