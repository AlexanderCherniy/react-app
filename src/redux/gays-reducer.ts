const TOGGLE_FOLLOW = 'gays-reducer/TOGGLE-FOLLOW'
const USERS = 'gays-reducer/USERS'
const TOTAL_COUNT = 'gays-reducer/TOTAL_COUNT'
const PAGE_NUMS = 'gays-reducer/PAGE_NUMS'
const initialState = {
    users:[] as any,
    totalCount:0,
    pageSize:5,
    nowPage:1
}
type initialStateType = typeof initialState
//@ts-ignore
window.storeState = initialState
const reducer = (state = initialState,action: any):initialStateType=>{
    switch(action.type){
        case TOGGLE_FOLLOW:{
            return{
                ...state,
                users: state.users.map((u:any)=>{
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
type toggleFollowACType = {
    type: typeof TOGGLE_FOLLOW
    userId: number
}
export let toggleFollowAC = (userId: number):toggleFollowACType => ({type:TOGGLE_FOLLOW,userId})
type totalCountACType = {
    type: typeof TOTAL_COUNT
    count: number
}
export let totalCountAC = (count: number):totalCountACType => ({type:TOTAL_COUNT,count})
type usersACType = {
    type: typeof USERS
    users: Object
}
export let usersAC = (users: Object):usersACType => ({type:USERS,users})
type pageNumsACType = {
    type: typeof PAGE_NUMS
    nums: number
}
export let pageNumsAC = (nums: number):pageNumsACType => ({type:PAGE_NUMS,nums})
export default reducer