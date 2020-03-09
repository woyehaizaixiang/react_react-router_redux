// 通用reducer
const initState = {
    num: 0,
    token: sessionStorage.getItem('token') || '',
    menuList: JSON.parse(sessionStorage.getItem('menuList')) || []
}

const actDefault = state => state;

// 测试add
const onTestAdd = (state, { payload }) => {
    return {
        ...state,
        num: payload
    }
}

// 退出登录
const onLogout = (state, { payload }) => {
    return {
        ...state,
        menuList: [],
        token: ''
    }
}

// 登录
const onLogin = (state, { payload }) => {
    return{
        ...state,
        menuList: payload.menuList,
        token: payload.token
    }
}


const reducerFn = (state=initState, action) => {
    switch (action.type) {
        case 'APP.onLogout':
            return onLogout(state, action);
        case 'APP.onLogin':
            return onLogin(state, action);
        case 'TEST::add':
            return onTestAdd(state, action);
        
        default:
            return actDefault(state, action);
    }
}

export default reducerFn;