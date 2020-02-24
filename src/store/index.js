/** 全局状态数据中心 **/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducer';

// reducer使用的中间件
const middlewares = [];
middlewares.push(thunk);

const store = createStore(RootReducer, applyMiddleware(...middlewares));

// REDUX 2.x 中，HMR检测不到reducer的变化，所以在创建store的文件中加入下面代码
if (module.hot) {
    module.hot.accept("../reducer", () => {
        const nextRootReducer = require("../reducer/index");
        store.replaceReducer(nextRootReducer);
    });
}

export default store;