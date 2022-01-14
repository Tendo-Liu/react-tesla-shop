/**
 * 合并各组件的reducer
 */

import { combineReducers } from 'redux';
import { reducer as TeslaReducer } from '../pages/Tesla/store';
import { reducer as ShopReducer } from '../pages/Shop/store'

export default combineReducers({
    tesla: TeslaReducer,
    shop: ShopReducer
});