// 所有接口方法的列表
import Ajax from './ajax.js'

export const reqmain = () => {
    // 默认传了 GET
    return Ajax('/tesla')
}

export const reqshop = () => {
    return Ajax('/shop')
}