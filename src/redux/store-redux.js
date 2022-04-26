import { combineReducers, createStore } from "redux";
import SideBar from "./sideBar-reducer";
import massagesReducer from './massages-reducer'
import profileReducer from './profile-reducer'
import settingsReducer from './settings-reducer'
import header from './header-reducer'
let reducers = combineReducers({
    massagesPage:massagesReducer,
    profilePage:profileReducer,
    settings:settingsReducer,
    sideBar:SideBar,
    header:header
})

let store = createStore(reducers)
export default store