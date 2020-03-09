import Mock from 'mockjs';

// 设置mock延时
Mock.setup({
    timeout: '400-2000'
})

export default Mock.mock('/api/login', 'post', (req)=>{
    console.log(req);
    let body = JSON.parse(req.body);
    console.log(body);
    let data = {};
    if(body.username == 'biji' && body.password == '123456'){ // 用户名密码正确
        data = {
            code: 1,
            msg: '登录成功',
            data: {
                taken: '46dsd51465fsdf46sd5423d1as1das86d8assdsaf',
                menuList: []
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