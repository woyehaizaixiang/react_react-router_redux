// 将App中所有reuducer，使用combineReducers合并成一个根reducer
import { combineReducers } from 'redux';

// import reducer
import appReducer from './app-reducer';

const RootReducer = combineReducers({
    app: appReducer
});
export default RootReducer;