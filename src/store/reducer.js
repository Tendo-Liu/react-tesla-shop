import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store/index'



export default combineReducers({
    main: mainReducer,
});