import { AppState } from './store-redux';
import { createSelector } from "reselect"


export const getUsersSelecor = (state:AppState)=>{
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelecor, (users)=>{
    return users.filter(user=> user.name !== 'karas518')
})
export const getErrorSelector = (state:AppState)=>{
    return state.usersPage.GlovalError
}
export const getError = createSelector(getErrorSelector,error=>{
    return error
})