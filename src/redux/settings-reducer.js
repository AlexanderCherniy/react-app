const CHANGE_SETTINGS_TEXT = 'settings-reducer/CHANGE-SETTINGS-TEXT'
const SET_BLACK_THEME = 'settings-reducer/SET_BLACK_THEME'
const blackThemeIsTrue = localStorage.getItem('blackTheme') === 'true' 
let initialState = {
    newText:'Settings',
    blackTheme: blackThemeIsTrue,
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case CHANGE_SETTINGS_TEXT:{
            return{
                ...state,
                newText: action.text
            }
        }
        case SET_BLACK_THEME:{
            return{
                ...state,
                blackTheme: action.blackTheme
            }
        }
        default: return state
    }
}
export const changeSettingsAction = (text)=>({type:CHANGE_SETTINGS_TEXT,text})
export const setBlackTheme = (blackTheme)=>({type:SET_BLACK_THEME,blackTheme})
export default reducer