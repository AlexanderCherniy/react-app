let CHANGE_SETTINGS_TEXT = 'settings-reducer/CHANGE-SETTINGS-TEXT'
let initialState = {newText:'Settings'}
let reducer = (state = initialState,action)=>{
    switch(action.type){
        case CHANGE_SETTINGS_TEXT:
            return{
                ...state,
                newText: action.text
            }
        default: return state
    }
}
export let changeSettingsAction = (text)=>({type:CHANGE_SETTINGS_TEXT,text:text})
export default reducer