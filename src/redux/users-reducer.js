import { UsersApi } from "../api/api-dal"
const TOGGLE_FOLLOWER = 'users-reducer/TOGGLE-FOLLOWER'
const USERS = 'users-reducer/USERS'
const PAGES_NUMS = 'users-reducer/PAGES_NUMS'
const TOTAL_COUNT = 'users-reducer/TOTAL_COUNT'
const LOADER = 'users-reducer/LOADER'
const IS_BLOCKED = 'users-reducer/IS_BLOCKED'
let initialState = {
    users:[],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    loader:true,
    isBlocked:[],
}

let reducer = (state = initialState,action)=>{
    switch(action.type){
        case TOGGLE_FOLLOWER:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return{
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u
                })
            }
        }
        case USERS: return{...state, users:[...action.users]}
        case PAGES_NUMS: return{...state,currentPage:action.currentPage}
        case TOTAL_COUNT: return{...state,totalCount: action.count}
        case LOADER: return{...state,loader:action.loader}
        case IS_BLOCKED: return{
            ...state,
            isBlocked: action.isBlocked
                ? [...state.isBlocked,action.userId] 
                : state.isBlocked.filter(id=> id!==action.userId)
        }
        default: return state
    }
}
export const toggleFollow = userId=> ({type:TOGGLE_FOLLOWER, userId})
export const users = users=> ({type:USERS, users})
export const pagesNums = currentPage=> ({type:PAGES_NUMS, currentPage})
export const setTotalUsersCount = count=> ({type:TOTAL_COUNT, count})
export const loader = (loader)=> ({type:LOADER,loader})
export const blocked = (isBlocked,userId)=> ({type:IS_BLOCKED,isBlocked,userId})
export const fillUsers = (nums,pageSize)=>{
    return async dispatch=>{
        dispatch(pagesNums(nums))
        dispatch(users(""))
        dispatch(loader(true))
        const data = await UsersApi.getUsers(nums, pageSize)
        dispatch(loader(false))
        dispatch(users(data.items))
    }
}
export const downloadUsers = (usersLength,currentPage,pageSize)=>{
    return async dispatch=>{
        if(usersLength === 0){
            const data = await UsersApi.getUsers(currentPage,pageSize)
            dispatch(loader(false))
            dispatch(users(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        }
    }
}

const followOrUnfollow = async (dispatch,followOrUnfollowMethod,id)=>{
    let apiMethod = followOrUnfollowMethod
    dispatch(blocked(true,id))
    await apiMethod(id)
    dispatch(toggleFollow(id))
    dispatch(blocked(false,id))
}

export const followUsers = (id)=> dispatch=>{
    followOrUnfollow(dispatch,UsersApi.postFollowUsers, id)
}
export const unfollowUsers = (id)=> dispatch=>{
    followOrUnfollow(dispatch,UsersApi.deleteFollowUsers, id)
}
export default reducer