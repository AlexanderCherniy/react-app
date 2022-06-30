import { AppState } from './store-redux';
import { createSelector } from "reselect"


export const getMassagesSelector = (state:AppState)=>{
    return state.massagesPage.massages
}
export const getMassages = createSelector(getMassagesSelector,(massages)=>{
    return massages
})
