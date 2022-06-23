// @ts-ignore
import { ProfileApi } from "../api/api-dal"



const ADD_POST = 'profile-reducer/ADD-POST'
const CHANGE_POST = 'profile-reducer/CHANGE-POST'
const UPDATE_PROFILE = 'profile-reducer/UPDATE_PROFILE'
const SET_STATUS = 'profile-reducer/CHANGE_STATUS'
const SET_PHOTO = 'profile-reducer/SET_PHOTO'
const SET_PROFILE = 'profile-reducer/SET_PROFILE'
const DELETE_POSTS = 'profile-reducer/DELETE_POSTS'
const CHECK_POSTS = 'profile-reducer/CHECK_POSTS'
let initialState = {
    post: JSON.parse(localStorage.getItem("posts") as any) !== null
        ? JSON.parse(localStorage.getItem("posts") as any)
        : [{ id: 0, img: 'https://gimn4vn.ru/wp-content/uploads/2015/09/27/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD.jpg', comment: 'Hello we were waiting for you!' },],
    newPost: '',
    profile: [

    ] as any,
    statusText: 'Напишите о себе',
}
type initialStateType = typeof initialState
let reducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let IdLast = state.post[state.post.length - 1].id
            let newPost = {
                id: IdLast + 1,
                img: action.avatar,
                comment: state.newPost,
            }
            return {
                ...state,
                post: [...state.post, newPost],
            }
        }
        case CHANGE_POST: {
            return {
                ...state,
                newPost: action.text
            }
        }
        case UPDATE_PROFILE: {
            return {
                ...state,
                profile: [action.newProfile]
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                statusText: action.newStatusText
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: [{ ...state.profile[0], photos: action.newPhoto }]
            }
        }
        case DELETE_POSTS: {
            return {
                ...state,
                post: null
            }
        }
        case CHECK_POSTS: {
            return {
                ...state,
                post: JSON.parse(localStorage.getItem("posts") as any) !== null
                    ? JSON.parse(localStorage.getItem("posts") as any)
                    : [{ id: 0, img: 'https://gimn4vn.ru/wp-content/uploads/2015/09/27/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD.jpg', comment: 'Hello we were waiting for you!' },]
            }
        }
        default: {
            return state
        }
    }
}
type ActionType = addPostsCreateActionType | changePostsCreateActionType 
                | updateProfileActionType | changeStatusActionType 
                | changePhotoActionType | deletePostsActionType | checkPostsActionType
type addPostsCreateActionType = {
    type: typeof ADD_POST,
    avatar: string
}
export const addPostsCreateAction = (avatar: string): addPostsCreateActionType => ({ type: ADD_POST, avatar })
type changePostsCreateActionType = {
    type: typeof CHANGE_POST,
    text: string
}
export const changePostsCreateAction = (text: string): changePostsCreateActionType => ({ type: CHANGE_POST, text })
type updateProfileActionType = {
    type: typeof UPDATE_PROFILE,
    newProfile: Object
}
export const updateProfile = (newProfile: Object): updateProfileActionType => ({ type: UPDATE_PROFILE, newProfile })
type changeStatusActionType = {
    type: typeof SET_STATUS,
    newStatusText: string
}
export const changeStatus = (newStatusText: string): changeStatusActionType => ({ type: SET_STATUS, newStatusText })
type changePhotoActionType = {
    type: typeof SET_PHOTO,
    newPhoto: string
}
export const changePhoto = (newPhoto: string): changePhotoActionType => ({ type: SET_PHOTO, newPhoto })

type deletePostsActionType = { type: typeof DELETE_POSTS }
export const deletePosts = ():deletePostsActionType => ({ type: DELETE_POSTS })

type checkPostsActionType = { type: typeof CHECK_POSTS }
export const checkPosts = ():checkPostsActionType => ({ type: CHECK_POSTS })

export const getStatus = (id: number) => async (dispatch: Function) => {
    const response = await ProfileApi.getStatus(id)
    dispatch(changeStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Function) => {
    const response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(changeStatus(status))
    }

}
export const getUserProfile = (userId: number) => async (dispatch: Function) => {
    const response = await ProfileApi.getProfile(userId)
    dispatch(updateProfile(response))
}
export const updatePhoto = (photo: string) => async (dispatch: Function) => {
    const response = await ProfileApi.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(changePhoto(response.data.data.photos))
    }
}
export const updateAccountProfile = (profile: Object) => async (dispatch: Function, getState: Function) => {
    const userId = getState().auth.id
    const response = await ProfileApi.updateProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}
export default reducer