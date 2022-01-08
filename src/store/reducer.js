/**
 * 合并各组件的reducer
 */

import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Tesla/store';
import { reducer as ActiveReducer } from '../pages/Activity/store'

export default combineReducers({
    tesla: mainReducer,
    active: ActiveReducer
});