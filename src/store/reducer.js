/**
 * 合并各组件的reducer
 */

import { combineReducers } from 'redux';
import { reducer as TeslaReducer } from '../pages/Tesla/store';
import { reducer as ShopReducer } from '../pages/Shop/store'
import { reducer as FindReducer } from '../pages/Find/store';

export default combineReducers({
    tesla: TeslaReducer,
    shop: ShopReducer,
    find: FindReducer
});