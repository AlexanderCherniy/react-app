import { createSelector } from "reselect"
import { AppState } from "./store-redux"

export const getMyUserProfileSelector = (state:AppState)=>{
    return state.profilePage.profile
}

export const getMyUserProfile = createSelector(getMyUserProfileSelector, (myProfile)=>{
    return myProfile
})