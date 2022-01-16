import * as actionTypes from './constants';

const defaultstate = {
    finddata: []
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FINDDATA:
            return {...state, finddata: action.data }
        default:
            return state;
    }
}
export default reducer;