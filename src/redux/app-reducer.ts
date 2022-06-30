import { Dispatch } from 'react';
import { setProfile } from './auth-reducer';
const INIZIALIZATION = 'app-reducer/INIZIALIZATION'

const initialState = {
    inizializated: false
}
type initialStateType = typeof initialState
const appReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case INIZIALIZATION: {
            return {
                ...state,
                inizializated: true
            }
        }
        default: return state
    }
}
type ActionType = inizializateAppActionType
type inizializateAppActionType = {
    type: typeof INIZIALIZATION
}
export const inizializateApp = (): inizializateAppActionType => ({ type: INIZIALIZATION })
export const inizializateReady = (Auth: boolean, Id: number) => (dispatch: any) => {
    dispatch(setProfile(Auth, Id))
        .then(() => dispatch(inizializateApp()))
}
export default appReducer