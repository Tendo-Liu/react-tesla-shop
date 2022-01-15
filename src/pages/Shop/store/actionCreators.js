import * as actionType from './constants.js';
import { reqshop } from '../../../api/index'

export const changeShopData = (data) => {
    return {
        type: actionType.CHANGE_SHOPDATA,
        data: data
    }
}

export const getShopData = () => {
    return (dispatch) => {
        reqshop()
            .then((res) => {
                // console.log(res);
                dispatch(changeShopData(res.data.data))
            })
            .catch((e) => {
                console.log('出错了');
            })
    }
}