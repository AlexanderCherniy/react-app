import {applyMiddleware, combineReducers, createStore, compose } from "redux";
import SideBar from "./sideBar-reducer";
import massagesReducer from './massages-reducer'
import profileReducer from './profile-reducer'
import settingsReducer from './settings-reducer'
import header from './header-reducer'
import friendsReducer from "./friends-reducer";
import gaysReducer from "./gays-reducer";
import usersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import middleWare from 'redux-thunk'
import appReducer from "./app-reducer";
import newsReducer from "./news-reducer";
import chatReducer from "./chat-reducer";
const reducers = combineReducers({
    massagesPage:massagesReducer,
    profilePage:profileReducer,
    settings:settingsReducer,
    sideBar:SideBar,
    header:header,
    friendsPage: friendsReducer,
    gaysPage: gaysReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    app: appReducer,
    news: newsReducer,
    chat: chatReducer
})
type reducersType = typeof reducers
export type AppState = ReturnType<reducersType>
export type AllActionType<T> = T extends {[key: string]:infer U} ? U : never
export function TypeFunction<T extends string>(arg: T):T{
    return arg
}


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(middleWare)));
//@ts-ignore
window.store = store
export default store