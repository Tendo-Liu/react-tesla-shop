import * as actionTypes from './constants';

const defaultstate = {
    shopdata: []
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SHOPDATA:
            return {...state, shopdata: action.data }
        default:
            return state;
    }
}
export default reducer;