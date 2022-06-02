import { createSelector } from "reselect"


export const getMassagesSelector = (state)=>{
    return state.massagesPage.massages
}
export const getMassages = createSelector(getMassagesSelector,(massages)=>{
    return massages
})
