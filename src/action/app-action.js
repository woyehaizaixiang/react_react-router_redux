// app 模块的action

// 测试数字增加
export const onTestAdd = num => dispatch => {
    num++;
    dispatch({
        type: 'TEST::add',
        payload: num
    })
}