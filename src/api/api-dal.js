import * as axios from 'axios'

const defaultAxios = axios.create({
    withCredentials:true,
    headers:{'api-key':'0a3a330c-8f0d-4180-80cb-b4285d1b263f'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const UsersApi ={
    getUsers: (page=1,pageSize=5)=> defaultAxios.get(`users?page=${page}&count=${pageSize}`).then(response => response.data) ,

    deleteFollowUsers : (id)=> defaultAxios.delete(`follow/${id}`).then(response => response) ,

    postFollowUsers : (id)=> defaultAxios.post(`follow/${id}`,{}).then(response => response) ,

    getUserPhoto : (id)=>{
        console.warn('Use Profile Api PLS:)')
        defaultAxios.get(`profile/${id}`).then(response=>response.data)
    }
}

export const ProfileApi = {
    getProfile: (id)=> defaultAxios.get(`profile/${id}`).then(response=>response.data) ,
    getStatus: (id)=> defaultAxios.get(`profile/status/${id}`),
    updateStatus: (status)=> defaultAxios.put(`profile/status`,{status}),
}

export const AuthApi={
    setAuth:()=> defaultAxios.get('auth/me').then(response=> response.data),
    loginService: (email,password,rememberMe,error)=> defaultAxios.post('auth/login',{email,password,rememberMe,error}).then(response=> response.data),
    unloginService: ()=> defaultAxios.delete('auth/login').then(response=> response.data),
}