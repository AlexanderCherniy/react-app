const CHANGE_SETTINGS_TEXT = 'settings-reducer/CHANGE-SETTINGS-TEXT'
const SET_BLACK_THEME = 'settings-reducer/SET_BLACK_THEME'
const blackThemeIsTrue = localStorage.getItem('blackTheme') === 'true'
let initialState = {
    newText: 'Settings',
    blackTheme: blackThemeIsTrue,
}
type initialStateType = typeof initialState
const reducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case CHANGE_SETTINGS_TEXT: {
            return {
                ...state,
                newText: action.text
            }
        }
        case SET_BLACK_THEME: {
            return {
                ...state,
                blackTheme: action.blackTheme
            }
        }
        default: return state
    }
}
type changeSettingsActionType = {
    type: typeof CHANGE_SETTINGS_TEXT
    text: string
}
export const changeSettingsAction = (text: string): changeSettingsActionType => ({ type: CHANGE_SETTINGS_TEXT, text })
type setBlackTheme = {
    type: typeof SET_BLACK_THEME
    blackTheme: boolean
}
export const setBlackTheme = (blackTheme: boolean): setBlackTheme => ({ type: SET_BLACK_THEME, blackTheme })
export default reducer