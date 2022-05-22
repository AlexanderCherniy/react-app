const FIND_USER = 'FIND-USER'
const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER'
const USERS = 'USERS'
const USERS_VIEWER = 'USERS_VIEWER' 
const TOTAL_COUNT = 'TOTAL_COUNT' 
let initialState = {
    users:[],
    findUserText:'FIND-USERSSS',
    totalCount:0,
    pageSize:7,
    pageStart:1
}
let reducer = (state = initialState,action)=>{
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
                users: state.users.map(u =>{
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
export let findUser = findUserText=>({type: FIND_USER, findUserText})
export let toggleFollowAC = userId=>({type:TOGGLE_FOLLOW_USER, userId})
export let newUsers = users=>({type:USERS, users})
export let usersViewerAC = pageStart=>({type:USERS_VIEWER, pageStart})
export let totalCountAC = totalCount=>({type:TOTAL_COUNT, totalCount})
export default reducer