import * as actionType from './constants.js';

export const changeMainData = (data) => {
    return {
        type: actionType.CHANGE_MAINDATA,
        data: data
    }
}