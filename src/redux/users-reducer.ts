import { Dispatch } from "react"
import { UsersApi } from "../api/users-api"
import { UserType } from "./GlobalTypes"
import { AllActionType, TypeFunction } from "./store-redux"
export const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 9,
    currentPage: 1,
    loader: true,
    isBlocked: [] as number[],
    GlovalError: false,
    term: '' as string | null,
    searchParams: "null" as "null" | "true" | "false"
}

type initialStateType = typeof initialState
const reducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'users-reducer/TOGGLE-FOLLOWER': {
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
        case 'users-reducer/USERS': return { ...state, users: [...action.users] }
        case 'users-reducer/PAGES_NUMS': return { ...state, currentPage: action.currentPage }
        case 'users-reducer/TOTAL_COUNT': return { ...state, totalCount: action.count }
        case 'users-reducer/LOADER': return { ...state, loader: action.loader }
        case 'users-reducer/IS_BLOCKED': return {
            ...state,
            isBlocked: action.isBlocked
                ? [...state.isBlocked, action.userId]
                : state.isBlocked.filter((id: number) => id !== action.userId)
        }
        case 'users-reducer/GLOBAL_ERROR': {
            return {
                ...state,
                GlovalError: action.updateErrorStatus
            }
        }
        case 'users-reducer/SET_TERM':{
            return{
                ...state,
                term: action.term
            }
        }
        case 'users-reducer/SET_SEARCH_PARAMS':{
            return{
                ...state,
                searchParams: action.searchParams
            }
        }
        default: return state
    }
}
type ActionType = ReturnType<AllActionType<typeof actions>>
export const actions = {
    toggleFollow : (userId: number) => ({ type: TypeFunction('users-reducer/TOGGLE-FOLLOWER'), userId }),
    users : (users: Array<UserType>) => ({ type: TypeFunction('users-reducer/USERS'), users }),
    pagesNums : (currentPage: number = 1) => ({ type: TypeFunction('users-reducer/PAGES_NUMS'), currentPage }),
    setTotalUsersCount : (count: number) => ({ type: TypeFunction('users-reducer/TOTAL_COUNT'), count }),
    loader : (loader: boolean) => ({ type: TypeFunction('users-reducer/LOADER'), loader }),
    blocked : (isBlocked: boolean, userId: number) => ({ type: TypeFunction('users-reducer/IS_BLOCKED'), isBlocked, userId }),
    toggleErrorStatus : (updateErrorStatus: boolean) => ({ type: TypeFunction('users-reducer/GLOBAL_ERROR'), updateErrorStatus }),
    setTerm : (term: string | null) => ({ type: TypeFunction('users-reducer/SET_TERM'), term }),
    setSearchParams : (searchParams: "null" | "true" | "false") => ({ type: TypeFunction('users-reducer/SET_SEARCH_PARAMS'), searchParams })
}

export const fillUsers = (nums: number, pageSize: number, term: string | null, searchParams: "null" | "true" | "false") => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(actions.pagesNums(nums))
        dispatch(actions.users([]))
        dispatch(actions.loader(true))
        dispatch(actions.setTerm(term))
        dispatch(actions.setSearchParams(searchParams))
        const data = await UsersApi.getUsers(nums, pageSize, term, searchParams)
        dispatch(actions.loader(false))
        dispatch(actions.users(data.items))
    }
}
export const downloadUsers = (usersLength: number, currentPage: number, pageSize: number, term: string | null, searchParams: "null" | "true" | "false") => {
    return async (dispatch: Dispatch<ActionType>) => {
        if (usersLength === 0) {
            dispatch(actions.setTerm(term))
            dispatch(actions.setSearchParams(searchParams))
            const data = await UsersApi.getUsers(currentPage, pageSize, term, searchParams)
            dispatch(actions.loader(false))
            dispatch(actions.users(data.items))
            dispatch(actions.setTotalUsersCount(data.totalCount))
        }
    }
}

const followOrUnfollow = async (dispatch: Dispatch<ActionType>, followOrUnfollowMethod: Function, id: number) => {
    let apiMethod = followOrUnfollowMethod
    dispatch(actions.blocked(true, id))
    try {
        await apiMethod(id)
        dispatch(actions.toggleFollow(id))
        dispatch(actions.blocked(false, id))
        dispatch(actions.toggleErrorStatus(false))
    }
    catch (error) {
        dispatch(actions.toggleErrorStatus(true))
    }
}

export const followUsers = (id: number) => (dispatch: Dispatch<ActionType>) => {
    followOrUnfollow(dispatch, UsersApi.postFollowUsers, id)
}
export const unfollowUsers = (id: number) => (dispatch: Dispatch<ActionType>) => {
    followOrUnfollow(dispatch, UsersApi.deleteFollowUsers, id)
}
export default reducer
