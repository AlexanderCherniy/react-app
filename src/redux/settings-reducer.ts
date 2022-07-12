import { AllActionType, TypeFunction } from "./store-redux"

const blackThemeIsTrue = localStorage.getItem('blackTheme') === 'true'
let initialState = {
    newText: 'Settings',
    blackTheme: blackThemeIsTrue as any,
}
type initialStateType = typeof initialState
const reducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "settings-reducer/CHANGE-SETTINGS-TEXT": {
            return {
                ...state,
                newText: action.text
            }
        }
        case "settings-reducer/SET_BLACK_THEME": {
            return {
                ...state,
                blackTheme: action.blackTheme
            }
        }
        default: return state
    }
}
type ActionType = ReturnType<AllActionType<typeof actions>>
export const actions = {
    changeSettingsAction : (text: string) => ({ type: TypeFunction("settings-reducer/CHANGE-SETTINGS-TEXT"), text }),
    setBlackTheme : (blackTheme: boolean) => ({ type: TypeFunction('settings-reducer/SET_BLACK_THEME'), blackTheme })
}

export default reducer