const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const USERS = 'USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const PAGE_NUMS = 'PAGE_NUMS'
let initialState = {
    users:[],
    totalCount:0,
    pageSize:5,
    nowPage:1
}
window.storeState = initialState
let reducer = (state = initialState,action)=>{
    switch(action.type){
        case TOGGLE_FOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u,followed: !u.followed}
                    }
                    return u
                })
            }
        }
        case USERS:{
            return{ ...state,users:[...action.users] }
        }
        case TOTAL_COUNT:{
            return{
                ...state,
                totalCount: action.count
            }
        }
        case PAGE_NUMS:{
            return{
                ...state,
                nowPage: action.nums
            }
        }
        default: return state
    }
}
export let toggleFollowAC = userId => ({type:TOGGLE_FOLLOW,userId})
export let totalCountAC = count => ({type:TOTAL_COUNT,count})
export let usersAC = users => ({type:USERS,users})
export let pageNumsAC = nums => ({type:PAGE_NUMS,nums})
export default reducer