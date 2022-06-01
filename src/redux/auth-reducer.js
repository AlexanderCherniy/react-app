import { AuthApi, ProfileApi } from "../api/api-dal"

const GET_DATA = 'auth-reducer/GET_DATA'
const AUTH_TOGGLE = 'auth-reducer/AUTH_TOGGLE'
const SET_PHOTO = 'auth-reducer/SET_PHOTO'
const SET_ERROR = 'auth-reducer/SET_ERROR'
const SET_CAPTCHA = 'auth-reducer/SET_CAPTCHA'
let initialState = {
    email:null,
    id:null,
    login:null,
    photo:null,
    isAuth: false,
    error: null,
    captcha: null
}
let authReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_DATA:{
            return{
                ...state,
                ...action.data
            }
        }
        case SET_PHOTO:{
            return{
                ...state,
                photo: action.photo
            }
        }
        case AUTH_TOGGLE:{
            return{
                ...state,
                isAuth: action.authStatus
            }
        }
        case SET_ERROR:{
            return{
                ...state,
                error: action.error
            }
        }
        case SET_CAPTCHA:{
            return{
                ...state,
                captcha: action.captcha
            }
        }
        default: return state
    }
}
export const setUserData = (email,id,login) => ({type:GET_DATA, data:{email,id,login}})

export const setPhoto = photo => ({type:SET_PHOTO, photo})

export const setError = error => ({type:SET_ERROR, error})

export const authToggle = (authStatus) => ({type:AUTH_TOGGLE, authStatus})

export const setCaptcha = captcha => ({type:SET_CAPTCHA, captcha})

export const setProfile = (isAuth,id)=> dispatch=>{
    return AuthApi.setAuth().then(data=>{
        if(data.resultCode === 0){
        dispatch(setUserData(data.data.email, data.data.id, data.data.login))
        dispatch(authToggle(true))
        setTimeout(()=>{
          if(isAuth===true){
            ProfileApi.getProfile(id).then(data=>{
                dispatch(setPhoto(data.photos.small))
              })
            }
        },0)
        }
      })
}

export const getCaptcha = ()=> dispatch=>{
    return AuthApi.getCaptcha().then(response=>{
        dispatch(setCaptcha(response.data.url))
    })
}
export default authReducer