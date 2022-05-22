import { createSelector } from "reselect"

export const getUsersSelecor = (state)=>{
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelecor, (users)=>{
    console.log('ПЕРЕРИСОВКА!');
    return users
})