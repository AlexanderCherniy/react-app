import { AuthApi, UsersApi } from "../api/api-dal"

const GET_DATA = 'GET_DATA'
const AUTH_TOGGLE = 'AUTH_TOGGLE'
const SET_PHOTO = 'SET_PHOTO'
const SET_ERROR = 'SET_ERROR'
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
            UsersApi.getUserPhoto(id).then(data=>{
                dispatch(setPhoto(data.photos.small))
              })
            }
        },0)
        }
      })
}
export default authReducer