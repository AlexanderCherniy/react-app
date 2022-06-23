import { setProfile } from "./auth-reducer"

const INIZIALIZATION = 'app-reducer/INIZIALIZATION'

const initialState = {
    inizializated: false
}
type initialStateType = typeof initialState
let appReducer = (state = initialState,action: any):initialStateType=>{
    switch(action.type){
        case INIZIALIZATION:{
            return{
                ...state,
                inizializated: true
            }
        }
        default: return state
    }
}
export let inizializateApp = () => ({type:INIZIALIZATION})
export let inizializateReady = (Auth: boolean, Id:number)=> (dispatch:any)=>{
    let promise = dispatch(setProfile(Auth, Id))
    promise.then(()=>dispatch(inizializateApp()))
}
export default appReducer