import Mock from 'mockjs';

export default Mock.mock('/login', 'post', (req)=>{
    let data = req;
    return data;
})