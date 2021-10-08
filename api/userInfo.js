import request from '@/utils/request'

const api_name = `/api/user`

export default {
    login(userInfo) {
        return request({
            url: `${api_name}/login`,
            method: `post`,
            data: userInfo
        })
    },

    saveUserAuth(userAuth) {
        return request({
            url: `${api_name}/auth`,
            method: `post`,
            data:userAuth
        })
     },

    getUserInfo() {
        return request({
            url: `${api_name}/auth/get`,
            method: `get`
        })
    }

}