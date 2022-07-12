import { useDispatch } from 'react-redux';
import { AllActionType, TypeFunction } from "./store-redux"

type SideBarLink = {
    id?: number
    to: string
    text: string
    isSelected: boolean
}
let initialState = {
    sideBarLinks:[
        {id:1,to:'/profile',text:'PROFILE', isSelected: false},
        {id:2,to:'/massages',text:'MESSAGES', isSelected: false},
        {id:3,to:'/users',text:'USERS!', isSelected: false},
        {id:4,to:'/music',text:'MUSIC', isSelected: false},
        {id:5,to:'/games',text:'GAMES', isSelected: false},
        {id:6,to:'/gays',text:'GAYS', isSelected: false},
        {id:7,to:'/help',text:'HELP', isSelected: false},
        {id:8,to:'/settings',text:'SETTINGS', isSelected: false},
        {id:9,to:'/friends',text:'FRIENDS', isSelected: false},

        ,
    ] as Array<SideBarLink | any>,
    selectedSideBarLinks: [{id:1,to:'/profile',text:'PROFILE', isSelected: true}] as any,
    showSideBar: true,
    oldURL: ''
}
//@ts-ignore
type initialStateType = typeof initialState
let SelectedKeysCalls = 0
const reducer = (state = initialState,action:ActionType):initialStateType=>{
    switch(action.type){
        case "sideBar-reducer/SET_SHOW_SIDEBAR":{
            return{
                ...state,
                showSideBar: action.showSideBar
            }
        }
        case 'sideBar-reducer/SET_SELECTED_KEYS':{
            if(SelectedKeysCalls <= state.sideBarLinks.length){
            return{
                ...state,
                sideBarLinks: state.sideBarLinks.map((object)=>{
                    SelectedKeysCalls++
                    if(`http://localhost:3000/react-app#${object.to}` === window.location.href){
                        return {
                            ...object,
                            isSelected: true
                        }
                    }
                    else{ 
                        if(object.isSelected === true){
                            return{
                                ...object,
                                isSelected: false
                            }
                        }
                        return object
                    }
                })
            }
        }
        }
        case 'sideBar-reducer/SET_SELECTED_SIDEBAR_LINKS':{
            return{
                ...state,
                selectedSideBarLinks: state.sideBarLinks.filter((object)=>{  
                    if(object !== undefined){
                        return object.isSelected === true
                    }
                })
            }
        }
        
        case 'sideBar-reducer/SET_OLD_URL':{
            return{
                ...state,
                oldURL: action.oldURL
            }
        }
        default: return state
    }

}
export type ActionType = ReturnType<AllActionType<typeof SideBarActions>>
export const SideBarActions = {
    setShowSideBar : (showSideBar:boolean) => ({type: TypeFunction("sideBar-reducer/SET_SHOW_SIDEBAR"), showSideBar}),
    setSelectedKeys : () => ({type: TypeFunction("sideBar-reducer/SET_SELECTED_KEYS")}),
    setSelectedSideBarLinks : () => ({type: TypeFunction("sideBar-reducer/SET_SELECTED_SIDEBAR_LINKS")}),
    setOldURL : (oldURL: string) => ({type: TypeFunction("sideBar-reducer/SET_OLD_URL"), oldURL})
}
export default reducer