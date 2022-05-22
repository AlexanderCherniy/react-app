let initialState = {
    sideBarLinks:[
        {id:1,to:'/massages',text:'Massages'},
        {id:2,to:'/',text:'PROFILE'},
        {id:3,to:'/music',text:'MUSIC'},
        {id:4,to:'/games',text:'GAMES'},
        {id:5,to:'/photos',text:'PHOTOS'},
        {id:6,to:'/help',text:'HELP'},
        {id:7,to:'/settings',text:'SETTINGS'},
    ],  
}

let reducer = (state = initialState,action)=>{
    return state
}
export default reducer