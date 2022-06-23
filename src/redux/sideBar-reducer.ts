const SET_SHOW_SIDEBAR = 'sideBar-reducer/SET_SHOW_SIDEBAR'

let initialState = {
    sideBarLinks:[
        {id:1,to:'/profile',text:'PROFILE'},
        {id:2,to:'/massages',text:'MESSAGES'},
        {id:3,to:'/friends',text:'FRIENDS'},
        {id:4,to:'/music',text:'MUSIC'},
        {id:5,to:'/games',text:'GAMES'},
        {id:6,to:'/gays',text:'GAYS'},
        {id:7,to:'/help',text:'HELP'},
        {id:8,to:'/settings',text:'SETTINGS'},
        {id:9,to:'/users',text:'USERS!'},
    ],
    showSideBar: true as boolean
}
type initialStateType = typeof initialState
const reducer = (state = initialState,action:any):initialStateType=>{
    switch(action.type){
        case SET_SHOW_SIDEBAR:{
            return{
                ...state,
                showSideBar: action.showSideBar
            }
        }
    }
    return state
}
type setShowSideBarActionType = {
    type: typeof SET_SHOW_SIDEBAR
    showSideBar: boolean
}
export const setShowSideBar = (showSideBar:boolean):setShowSideBarActionType => ({type:SET_SHOW_SIDEBAR, showSideBar})
export default reducer