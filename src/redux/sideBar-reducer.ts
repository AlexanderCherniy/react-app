import { AllActionType, TypeFunction } from "./store-redux"

type SideBarLink = {
    id?: number
    to: string
    text: string
    isSelected: boolean
}
let initialState = {
    sideBarLinks:[
        {id:1,to:'/profile',text:'PROFILE', isSelected: true},
        {id:2,to:'/massages',text:'MESSAGES', isSelected: false},
        {id:3,to:'/chat',text:'CHAT!', isSelected: false},
        {id:4,to:'/users',text:'USERS!', isSelected: false},
        {id:5,to:'/news',text:'NEWS', isSelected: false},
        {id:6,to:'/help',text:'HELP', isSelected: false},
        {id:7,to:'/settings',text:'SETTINGS', isSelected: false},
    ] as Array<SideBarLink>,
    selectedSideBarLinks: [{id:1,to:'/profile',text:'PROFILE', isSelected: false}] as Array<SideBarLink>,
    showSideBar: true,
    oldURL: ''
} 

//@ts-ignore
type initialStateType = typeof initialState
let SelectedKeysCalls = 0
console.log(window.location.href.split('/'));

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
            const isLocalHost = window.location.href.split('/')[2].split(':')[0]
            
            return{
                ...state,
                sideBarLinks: state.sideBarLinks.map((object)=>{
                    SelectedKeysCalls++
                    const urlHelper = `http://localhost:3000/react-app#${object.to}`
                    const gitHub = `https://alexandercherniy.github.io/react-app/#${object.to}`
                    const defaultUrl = isLocalHost === 'localhost' ? urlHelper : gitHub
                    const defaultUrl2 = isLocalHost === 'localhost' ?  `http://localhost:3000/react-app#/${window.location.href.split('/')[4].split('?')[0]}` : `https://alexandercherniy.github.io/react-app/#/${window.location.href.split('/')[5].split('?')[0]}`
                    if( defaultUrl === defaultUrl2){
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