import request from '@/utils/request'

const api_name = `/api/ucenter/wx`

export default {
    genQRParam() {
        return request({
            url: `${api_name}/qrParam`,
            method: `get`
        })
    }
}