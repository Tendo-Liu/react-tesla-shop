import * as actionTypes from './constants';

const defaultstate = {
    finddata: {
        newsList: []
    }
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FINDDATA:
            // console.log(action.data.newsList, '////');
            let newData = {
                newsList: [
                    ...state.finddata.newsList,
                    ...action.data.newsList
                ]
            }
            return { ...state, finddata: newData }
        default:
            return state;
    }
}
export default reducer;