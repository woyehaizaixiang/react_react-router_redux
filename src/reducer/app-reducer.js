// 通用reducer
const initState = {
    num: 0,
    menuList: [
        {
            path: '/admin',
            name: '啊大米',
            children: [
                {
                    path: 'page1',
                    name: '怕个1'
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