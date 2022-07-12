import { AuthApi } from './../api/auth-api';
import { Dispatch } from 'react';
import { setProfileType } from './GlobalTypes';
import { AllActionType, TypeFunction } from './store-redux';
import { ProfileApi } from '../api/profile-api';
const initialState = {
    email: null as null | string,
    id: null as any,
    login: null as null | string,
    photo: null as null | string,
    isAuth: false as boolean,
    error: null as null | string | boolean,
    captcha: null as null | string
}
type initialStateType = typeof initialState
const authReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'auth-reducer/GET_DATA': {
            return {
                ...state,
                ...action.data
            }
        }
        case 'auth-reducer/SET_PHOTO': {
            return {
                ...state,
                photo: action.photo
            }
        }
        case 'auth-reducer/AUTH_TOGGLE': {
            return {
                ...state,
                isAuth: action.authStatus
            }
        }
        case 'auth-reducer/SET_ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        case 'auth-reducer/SET_CAPTCHA': {
            return {
                ...state,
                captcha: action.captcha
            }
        }
        default: return state
    }
}
export type ActionType = ReturnType<AllActionType<typeof actions>>
export type dataType = {
    email: string | null
    id: number
    login: string | null
}
export const actions = {
    setUserData: (email: string, id: number, login: string) => ({ type: TypeFunction("auth-reducer/GET_DATA"), data: { email, id, login } }),
    setPhoto: (photo: null | string) => ({ type: TypeFunction("auth-reducer/SET_PHOTO"), photo }),
    setError: (error: null | string | boolean) => ({ type: TypeFunction("auth-reducer/SET_ERROR"), error }),
    authToggle: (authStatus: boolean) => ({ type: TypeFunction("auth-reducer/AUTH_TOGGLE"), authStatus }),
    setCaptcha: (captcha: null | string) => ({ type: TypeFunction("auth-reducer/SET_CAPTCHA"), captcha }),
}

export const setProfile = (isAuth: boolean, id: number) => (dispatch: Dispatch<ActionType>) => {
    return AuthApi.setAuth().then((data: setProfileType) => {
        if (data.resultCode === ProfileStatusCodes.Good) {
            dispatch(actions.setUserData(data.data.email, data.data.id, data.data.login))
            dispatch(actions.authToggle(true))
            setTimeout(() => {
                if (isAuth === true) {
                    ProfileApi.getProfile(id).then((data: any) => {
                        dispatch(actions.setPhoto(data.photos.small))
                    })
                }
            }, 0)
        }
    })
}

export const getCaptcha = () => (dispatch: Dispatch<ActionType>) => {
    return AuthApi.getCaptcha().then((response: captchaDataType) => { // убери any потом
        dispatch(actions.setCaptcha(response.url))
    })
}

enum ProfileStatusCodes {
    Good = 0,
}

export type captchaDataType = {
    url: string | null
}

export default authReducer