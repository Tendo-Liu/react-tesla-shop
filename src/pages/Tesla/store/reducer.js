import * as actionTypes from './constants';

const defaultstate = {
    tesladata: [],
    index: 2
}

const reducer = (state = defaultstate, action) => {
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