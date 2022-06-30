import { Dispatch } from "react"
import { UsersApi } from "../api/api-dal"
const TOGGLE_FOLLOWER = 'users-reducer/TOGGLE-FOLLOWER'
const USERS = 'users-reducer/USERS'
const PAGES_NUMS = 'users-reducer/PAGES_NUMS'
const TOTAL_COUNT = 'users-reducer/TOTAL_COUNT'
const LOADER = 'users-reducer/LOADER'
const IS_BLOCKED = 'users-reducer/IS_BLOCKED'
const GLOBAL_ERROR = 'users-reducer/GLOBAL_ERROR'
export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
}
const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    loader: true,
    isBlocked: [] as number[],
    GlovalError: false
}

type initialStateType = typeof initialState
const reducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOWER: {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u
                })
            }
        }
        case USERS: return { ...state, users: [...action.users] }
        case PAGES_NUMS: return { ...state, currentPage: action.currentPage }
        case TOTAL_COUNT: return { ...state, totalCount: action.count }
        case LOADER: return { ...state, loader: action.loader }
        case IS_BLOCKED: return {
            ...state,
            isBlocked: action.isBlocked
                ? [...state.isBlocked, action.userId]
                : state.isBlocked.filter((id: number) => id !== action.userId)
        }
        case GLOBAL_ERROR: {
            return {
                ...state,
                GlovalError: action.updateErrorStatus
            }
        }
        default: return state
    }
}
type ActionType = toggleFollowActionType | usersActionType 
    | pagesNumsActionType | setTotalUsersCountActionType 
    | loaderActionType | blockedActionType | toggleErrorStatusActionType
type toggleFollowActionType = {
    type: typeof TOGGLE_FOLLOWER
    userId: number
}
export const toggleFollow = (userId: number): toggleFollowActionType => ({ type: TOGGLE_FOLLOWER, userId })
type usersActionType = {
    type: typeof USERS
    // users: Object | Array<UserType> 
    users: any 
}
export const users = (users: Object): usersActionType => ({ type: USERS, users })
type pagesNumsActionType = {
    type: typeof PAGES_NUMS
    currentPage: number
}
export const pagesNums = (currentPage: number): pagesNumsActionType => ({ type: PAGES_NUMS, currentPage })
type setTotalUsersCountActionType = {
    type: typeof TOTAL_COUNT
    count: number
}
export const setTotalUsersCount = (count: number): setTotalUsersCountActionType => ({ type: TOTAL_COUNT, count })
type loaderActionType = {
    type: typeof LOADER
    loader: boolean
}
export const loader = (loader: boolean): loaderActionType => ({ type: LOADER, loader })
type blockedActionType = {
    type: typeof IS_BLOCKED
    isBlocked: boolean
    userId: number
}
export const blocked = (isBlocked: boolean, userId: number): blockedActionType => ({ type: IS_BLOCKED, isBlocked, userId })
type toggleErrorStatusActionType = {
    type: typeof GLOBAL_ERROR
    updateErrorStatus: boolean
}
export const toggleErrorStatus = (updateErrorStatus: boolean):toggleErrorStatusActionType => ({ type: GLOBAL_ERROR, updateErrorStatus })

export const fillUsers = (nums: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(pagesNums(nums))
        dispatch(users(""))
        dispatch(loader(true))
        const data = await UsersApi.getUsers(nums, pageSize)
        dispatch(loader(false))
        dispatch(users(data.items))
    }
}
export const downloadUsers = (usersLength: number, currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        if (usersLength === 0) {
            const data = await UsersApi.getUsers(currentPage, pageSize)
            dispatch(loader(false))
            dispatch(users(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        }
    }
}

const followOrUnfollow = async (dispatch: Dispatch<ActionType>, followOrUnfollowMethod: Function, id: number) => {
    let apiMethod = followOrUnfollowMethod
    dispatch(blocked(true, id))
    try {
        await apiMethod(id)
        dispatch(toggleFollow(id))
        dispatch(blocked(false, id))
        dispatch(toggleErrorStatus(false))
    }
    catch (error) {
        dispatch(toggleErrorStatus(true))
    }
}

export const followUsers = (id: number) => (dispatch: Dispatch<ActionType>) => {
    followOrUnfollow(dispatch, UsersApi.postFollowUsers, id)
}
export const unfollowUsers = (id: number) => (dispatch: Dispatch<ActionType>) => {
    followOrUnfollow(dispatch, UsersApi.deleteFollowUsers, id)
}
export default reducer