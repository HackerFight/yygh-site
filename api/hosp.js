import request from '@/utils/request'

const api_name = `/api/hosp/hospital`

//
export default {

    getHospitalList(page, limit, searchObj) {
        return request({
            url: `${api_name}/findHospList/${page}/${limit}`,
            method: 'get',
            params: searchObj   //不是json，后端没有使用 @RequestBody注解
        })
    },

    getHospByName(hosname) {
        return request({
            url: `${api_name}/findHospByName/${hosname}`,
            method: 'get'
        })
    },

    //根据医院编号获取医院预约挂号详情
    show(hoscode) {
        return request({
            url: `${api_name}/findHospDetail/${hoscode}`,
            method: 'get'
        })
    },
    
    //根据医院编号获取科室信息
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    },

    getBookingScheduleRule(page, limit, hoscode, depcode) {
        return request({
            url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
            method: 'get'
        })
    },
            
    findScheduleList(hoscode, depcode, workDate) {
        return request({
            url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
            method: 'get'
        })
    },

    getSchedule(id) {
        return request({
          url: `${api_name}/getSchedule/${id}`,
          method: 'get'
        })
    }

}