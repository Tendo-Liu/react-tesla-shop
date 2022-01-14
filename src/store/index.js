/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

import thunk from 'redux-thunk';
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, compose, applyMiddleware } from 'redux';
// 引入为组件服务的的reducer
import reducer from "./reducer";

// redux-persist实现redux持久化本地数据存储。
import {persistStore, persistReducer} from 'redux-persist';
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session'
// import storage from 'redux-persist/lib/storage'; //localStorage机制

const storageConfig = {
    key: 'root', // 必须有的
    storage:storageSession, // 缓存机制
    // blacklist: ['index'] // reducer 里不持久化的数据,除此外均为持久化数据
    // 必须为跟store，不能是某个属性
    whitelist: ['tesla'] // reducer 里持久化的数据,除此外均为不持久化数据
}

const myPersistReducer = persistReducer(storageConfig, reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(myPersistReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store)
// 暴露store
export default store;