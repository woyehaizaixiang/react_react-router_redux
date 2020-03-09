import Mock from 'mockjs';

// 设置mock延时
Mock.setup({
    timeout: '400-2000'
})

export default Mock.mock('/api/login', 'post', (req)=>{
    let body = JSON.parse(req.body);
    let data = {};
    if(body.username == 'biji' && body.password == '123456'){ // 用户名密码正确
        data = {
            code: 1,
            msg: '登录成功',
            data: {
                token: '46dsd51465fsdf46sd5423d1as1das86d8assdsaf',
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
        }
    }else{
        data = {
            code: 0,
            msg: '用户名或密码不正确'
        }
    }
    return data;
})