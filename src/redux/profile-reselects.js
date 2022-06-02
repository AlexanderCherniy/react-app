import { createSelector } from "reselect"

export const getMyUserProfileSelector = (state)=>{
    return state.profilePage.profile
}

export const getMyUserProfile = createSelector(getMyUserProfileSelector, (myProfile)=>{
    return myProfile
})