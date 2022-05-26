import { AuthApi, ProfileApi } from "../api/api-dal"

const GET_DATA = 'auth-reducer/GET_DATA'
const AUTH_TOGGLE = 'auth-reducer/AUTH_TOGGLE'
const SET_PHOTO = 'auth-reducer/SET_PHOTO'
const SET_ERROR = 'auth-reducer/SET_ERROR'
let initialState = {
    email:null,
    id:null,
    login:null,
    photo:null,
    isAuth: false,
    error: null
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
        default: return state
    }
}
export let setUserData = (email,id,login) => ({type:GET_DATA, data:{email,id,login}})

export let setPhoto = photo => ({type:SET_PHOTO, photo})

export let setError = error => ({type:SET_ERROR, error})

export let authToggle = (authStatus) => ({type:AUTH_TOGGLE, authStatus})

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
export default authReducer