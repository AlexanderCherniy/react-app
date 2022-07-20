let initialState = {
    headerLinks: [
        {id:1,text:'OTHER'},
        {id:2,text:'HELP'},
        {id:3,text:'SETTINGS'},
    ],
}
type initialStateType = typeof initialState
let reducer = (state = initialState,action:any):initialStateType=>{
    return state
}
export default reducer