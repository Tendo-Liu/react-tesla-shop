/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

import thunk from 'redux-thunk';
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, compose, applyMiddleware } from 'redux';
// 引入为组件服务的的reducer
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// 暴露store
export default store;