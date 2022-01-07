import * as actionType from './constants.js';

export const changeIndex = (data) => {
    return {
        type: actionType.CHNAGE_INDEX,
        index: data,
    }
}