import { createSelector } from "reselect"

export const getUsersSelecor = (state)=>{
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelecor, (users)=>{
    console.log('ПЕРЕРИСОВКА!');
    return users.filter(user=> user.name !== 'karas518')
})

export const getMassagesSelector = (state)=>{
    return state.massagesPage.massages
}
export const getMassages = createSelector(getMassagesSelector,(massages)=>{
    return massages
})






export const getMyUserProfileSelector = (state)=>{
    return state.profilePage.profile
}


export const getMyUserProfile = createSelector(getMyUserProfileSelector, (myProfile)=>{
    return myProfile
})


















