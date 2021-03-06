import { Dispatch } from 'react';
import { ProfileApi } from '../api/profile-api';
import { ProfileType } from './GlobalTypes';
import { AllActionType, AppState, TypeFunction } from './store-redux';

const initialState = {
    post: JSON.parse(localStorage.getItem("posts") as string) !== null
        ? JSON.parse(localStorage.getItem("posts") as string)
        : [{ id: 0, img: 'https://gimn4vn.ru/wp-content/uploads/2015/09/27/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD.jpg', comment: 'Hello we were waiting for you!' },],
    newPost: '',
    profile: [

    ] as Array<ProfileType>,
    statusText: 'Напишите о себе',
}
export type PostType = {
    id: number
    img: string
    comment: string 
}
type initialStateType = typeof initialState
const reducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'profile-reducer/ADD-POST': {
            const IdLast = state.post[state.post.length - 1].id
            const newPost = {
                id: IdLast + 1,
                img: action.avatar,
                comment: state.newPost,
            }
            return {
                ...state,
                post: [...state.post, newPost],
            }
        }
        case 'profile-reducer/CHANGE_POST': {
            return {
                ...state,
                newPost: action.text
            }
        }
        case 'profile-reducer/UPDATE_PROFILE': {
            return {
                ...state,
                profile: [action.newProfile]
            }
        }
        case 'profile-reducer/SET_STATUS': {
            return {
                ...state,
                statusText: action.newStatusText
            }
        }
        case 'profile-reducer/SET_PHOTO': {
            return {
                ...state,
                profile: [{ ...state.profile[0], photos: action.newPhoto }]
            }
        }
        case 'profile-reducer/DELETE_POSTS': {
            return {
                ...state,
                post: null
            }
        }
        case 'profile-reducer/CHECK_POSTS': {
            return {
                ...state,
                post: JSON.parse(localStorage.getItem("posts") as string) !== null
                    ? JSON.parse(localStorage.getItem("posts") as string)
                    : [{ id: 0, img: 'https://gimn4vn.ru/wp-content/uploads/2015/09/27/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD.jpg', comment: 'Hello we were waiting for you!' },]
            }
        }
        default: {
            return state
        }
    }
}
type ActionType = ReturnType<AllActionType<typeof actions>>

export const actions = {
    addPostsCreateAction: (avatar: string) => ({ type: TypeFunction("profile-reducer/ADD-POST"), avatar }),
    changePostsCreateAction: (text: string) => ({ type: TypeFunction("profile-reducer/CHANGE_POST"), text }),
    updateProfile: (newProfile: ProfileType) => ({ type: TypeFunction("profile-reducer/UPDATE_PROFILE"), newProfile }),
    changeStatus: (newStatusText: string) => ({ type: TypeFunction("profile-reducer/SET_STATUS"), newStatusText }),
    changePhoto: (newPhoto: string | {large: string , small: string}) => ({ type: TypeFunction("profile-reducer/SET_PHOTO"), newPhoto }),
    deletePosts: () => ({ type: TypeFunction("profile-reducer/DELETE_POSTS")}),
    checkPosts: () => ({ type: TypeFunction("profile-reducer/CHECK_POSTS")})
}

export const getStatus = (id: number) => async (dispatch: Dispatch<ActionType>) => {
    const response = await ProfileApi.getStatus(id)
    dispatch(actions.changeStatus(response.data))
}
export enum ProfileCodes{
    Good = 0
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionType>) => {
    const response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === ProfileCodes.Good) {
        dispatch(actions.changeStatus(status))
    }

}
export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ActionType>) => {
    const response = await ProfileApi.getProfile(userId)
    dispatch(actions.updateProfile(response))
}
export const updatePhoto = (photo: string) => async (dispatch: Dispatch<ActionType>) => {
    const response = await ProfileApi.updatePhoto(photo)
    if (response.data.resultCode === ProfileCodes.Good) {
        dispatch(actions.changePhoto(response.data.data.photos))
    }
}
export const updateAccountProfile = (profile: ProfileType) => async (dispatch: Function, getState: ()=> AppState) => {
    const userId = getState().auth.id
    const response = await ProfileApi.updateProfile(profile)
    if (response.data.resultCode === ProfileCodes.Good) {
        dispatch(getUserProfile(userId))
    }
}
export default reducer