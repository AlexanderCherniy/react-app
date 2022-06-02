import * as axios from 'axios'

const defaultAxios = axios.create({
    withCredentials:true,
    headers:{'api-key':'0a3a330c-8f0d-4180-80cb-b4285d1b263f'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const UsersApi ={
    getUsers: (page=1,pageSize=5)=> defaultAxios.get(`users?page=${page}&count=${pageSize}`).then(response => response.data) ,

    deleteFollowUsers : (id)=> defaultAxios.delete(`follow/${id}`).then(response => response),

    postFollowUsers : (id)=> defaultAxios.post(`follow/${id}`,{}).then(response => response) ,
}
export const ProfileApi = {
    getProfile: (userId)=> defaultAxios.get(`profile/${userId}`).then(response=>response.data) ,
    getStatus: (id)=> defaultAxios.get(`profile/status/${id}`),
    updateStatus: (status)=> {
        return defaultAxios.put(`profile/status`,{status})
    },
    updatePhoto: (photo)=> {
        const formData = new FormData()
        formData.append("image", photo)
        return defaultAxios.put(`profile/photo`,formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile: (profile) => {
        return defaultAxios.put(`profile`, profile)
    }
}

export const AuthApi={
    setAuth:()=> defaultAxios.get('auth/me').then(response=> response.data),
    loginService: (email,password,rememberMe,captcha,error)=> {
        return defaultAxios.post('auth/login',{email,password,rememberMe,captcha,error}).then(response=> response.data)
    },
    unloginService: ()=> defaultAxios.delete('auth/login').then(response=> response.data),
    getCaptcha: ()=> defaultAxios.get('security/get-captcha-url').then(response=> response),
}