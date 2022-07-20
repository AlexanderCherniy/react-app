const FIND_USER = 'friends-reducer/FIND-USER'
const TOGGLE_FOLLOW_USER = 'friends-reducer/TOGGLE_FOLLOW_USER'
const USERS = 'friends-reducer/USERS'
const USERS_VIEWER = 'friends-reducer/USERS_VIEWER' 
const TOTAL_COUNT = 'friends-reducer/TOTAL_COUNT' 
let initialState = {
    users:[] as any,
    findUserText:'FIND-USERSSS',
    totalCount:0,
    pageSize:7,
    pageStart:1
}

type initialStateType = typeof initialState
let reducer = (state = initialState,action:any):initialStateType=>{
    switch(action.type){
        case FIND_USER:{
            return {
                ...state,
                findUserText: action.findUserText
            }
        }
        case TOGGLE_FOLLOW_USER:{
            return{
                ...state,
                users: state.users.map((u: any) =>{
                    if(u.id === action.userId){
                        return {...u, followed : !u.followed}
                    }
                    return u
                }),
            }
        }
        case USERS:{
            return{ ...state, users: [...action.users] }
        }
        case USERS_VIEWER:{
            return{
                ...state,
                pageStart: action.pageStart
            }
        }
        case TOTAL_COUNT:{
            return{
                ...state,
                totalCount: action.totalCount
            }
        }
        default:{
            return state
        }
    }
}
type findUserType = {
    type: typeof FIND_USER
    findUserText: string
}
export let findUser = (findUserText: string): findUserType=>({type: FIND_USER, findUserText})
type toggleFollowACType = {
    type: typeof TOGGLE_FOLLOW_USER
    userId: number
}
export let toggleFollowAC = (userId: number): toggleFollowACType=>({type:TOGGLE_FOLLOW_USER, userId})
type newUsersType = {
    type: typeof USERS
    users: Object
}
export let newUsers = (users: Object):newUsersType=>({type:USERS, users})
type usersViewerACType = {
    type: typeof USERS_VIEWER
    pageStart: number
}
export let usersViewerAC = (pageStart: number):usersViewerACType=>({type:USERS_VIEWER, pageStart})
type totalCountACType = {
    type: typeof TOTAL_COUNT
    totalCount: number
}
export let totalCountAC = (totalCount: number):totalCountACType=>({type:TOTAL_COUNT, totalCount})
export default reducer