import * as actionTypes from './constants';

const defaultstate = {
    maindata: [],
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MAINDATA:
            return {...state, maindata: action.data }
        default:
            return state;
    }
}
export default reducer;