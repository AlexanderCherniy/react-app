// @ts-ignore
import { AuthApi, ProfileApi } from "../api/api-dal"

const GET_DATA = 'auth-reducer/GET_DATA'
const AUTH_TOGGLE = 'auth-reducer/AUTH_TOGGLE'
const SET_PHOTO = 'auth-reducer/SET_PHOTO'
const SET_ERROR = 'auth-reducer/SET_ERROR'
const SET_CAPTCHA = 'auth-reducer/SET_CAPTCHA'
let initialState = {
    email: null as null | string,
    id: null as null | number,
    login: null as null | string,
    photo: null as null | string,
    isAuth: false as boolean,
    error: null as null | string | boolean,
    captcha: null as null | string
}
type initialStateType = typeof initialState
let authReducer = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                photo: action.photo
            }
        }
        case AUTH_TOGGLE: {
            return {
                ...state,
                isAuth: action.authStatus
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha
            }
        }
        default: return state
    }
}
type dataType = {
    email: null | string
    id: null | number
    login: null | string
}
type setUserDataActionType = {
    type: typeof GET_DATA
    data: dataType
}
export const setUserData = (email: string, id:number, login: string):setUserDataActionType => ({ type: GET_DATA, data: {email,id,login}})
type setPhotoActionType = {
    type: typeof SET_PHOTO
    photo: null | string
}
export const setPhoto = (photo: null | string):setPhotoActionType => ({ type: SET_PHOTO, photo })
type setErrorActionType = {
    type: typeof SET_ERROR
    error: null | string | boolean
}
export const setError = (error: null | string | boolean):setErrorActionType => ({ type:SET_ERROR, error })
type authToggleActionType = {
    type: typeof AUTH_TOGGLE
    authStatus: boolean | string
}
export const authToggle = (authStatus: boolean | string):authToggleActionType => ({ type: AUTH_TOGGLE, authStatus })
type setCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: null | string
}
export const setCaptcha = (captcha: null | string):setCaptchaActionType => ({ type: SET_CAPTCHA, captcha })

export const setProfile = (isAuth: boolean, id: null | number) => (dispatch: any) => {
    return AuthApi.setAuth().then((data: any) => {
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data.email, data.data.id, data.data.login))
            dispatch(authToggle(true))
            setTimeout(() => {
                if (isAuth === true) {
                    ProfileApi.getProfile(id).then((data:any) => {
                        dispatch(setPhoto(data.photos.small))
                    })
                }
            }, 0)
        }
    })
}

export const getCaptcha = () => (dispatch: any) => {
    return AuthApi.getCaptcha().then((response:any) => {
        dispatch(setCaptcha(response.data.url))
    })
}
export default authReducer