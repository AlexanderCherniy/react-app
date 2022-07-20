import axios from 'axios'

export const defaultAxios = axios.create({
    withCredentials: true,
    headers: { 'api-key': '0a3a330c-8f0d-4180-80cb-b4285d1b263f' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


