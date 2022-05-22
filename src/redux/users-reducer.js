import { UsersApi } from "../api/api-dal"
const TOGGLE_FOLLOWER = 'TOGGLE-FOLLOWER'
const USERS = 'USERS'
const PAGES_NUMS = 'PAGES_NUMS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const LOADER = 'LOADER'
const IS_BLOCKED = 'IS_BLOCKED'
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
    return (dispatch)=>{
        dispatch(pagesNums(nums))
        dispatch(users(""))
        dispatch(loader(true))
        UsersApi.getUsers(nums, pageSize).then(data=>{
            dispatch(loader(false))
            dispatch(users(data.items))
        })
    }
}
export const downloadUsers = (usersLength,currentPage,pageSize)=>{
    return dispatch=>{
        if(usersLength === 0){
            UsersApi.getUsers(currentPage,pageSize).then(data=>{
                dispatch(loader(false))
                dispatch(users(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            }
        )
    }}
}
export const followUsers = (id)=>{
    return dispatch =>{
    dispatch(blocked(true,id))
    UsersApi.postFollowUsers(id).then(()=>{
        dispatch(toggleFollow(id))
        dispatch(blocked(false,id))
    })
}
}
export const unfollowUsers = (id)=>{
    return dispatch =>{
    dispatch(blocked(true,id))
    UsersApi.deleteFollowUsers(id).then(()=>{
        dispatch(toggleFollow(id))
        dispatch(blocked(false,id))
    })  
}
}
export default reducer