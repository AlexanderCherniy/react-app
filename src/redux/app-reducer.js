import { setProfile } from "./auth-reducer"

const INIZIALIZATION = 'app-reducer/INIZIALIZATION'
let initialState = {
    inizializated: false
}
let appReducer = (state = initialState,action)=>{
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
export let inizializateReady = (Auth, Id)=> dispatch=>{
    let promise = dispatch(setProfile(Auth, Id))
    promise.then(()=>dispatch(inizializateApp()))
}
export default appReducer