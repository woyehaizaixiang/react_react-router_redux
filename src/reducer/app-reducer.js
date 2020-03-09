// 通用reducer
const initState = {
    num: 0,
    menuList: [
        {
            path: '/dashboard',
            name: '首页'
        },
        {
            path: '/auth',
            name: '权限管理',
            children: [
                {
                    path: '/auth/roleadmin',
                    name: '角色管理'
                }
            ]
        }
    ]
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
        userInfo: null,
        menus: [],
        roles: [],
        powers: [], // 权限add,del,edit,see)

    }
}


const reducerFn = (state=initState, action) => {
    switch (action.type) {
        case 'APP.onLogout':
            return onLogout(state, action);
        case 'TEST::add':
            return onTestAdd(state, action);
        default:
            return actDefault(state, action);
    }
}

export default reducerFn;