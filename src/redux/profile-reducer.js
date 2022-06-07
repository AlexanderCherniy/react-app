import { ProfileApi } from "../api/api-dal"



const ADD_POST = 'profile-reducer/ADD-POST'
const CHANGE_POST = 'profile-reducer/CHANGE-POST'
const UPDATE_PROFILE = 'profile-reducer/UPDATE_PROFILE'
const SET_STATUS = 'profile-reducer/CHANGE_STATUS'
const SET_PHOTO = 'profile-reducer/SET_PHOTO'
const SET_PROFILE = 'profile-reducer/SET_PROFILE'
const DELETE_POSTS = 'profile-reducer/DELETE_POSTS'
const CHECK_POSTS = 'profile-reducer/CHECK_POSTS'
let initialState = {
    post: JSON.parse(localStorage.getItem("posts")) !== null 
    ? JSON.parse(localStorage.getItem("posts")) 
    : [{id:0,img:'https://gimn4vn.ru/wp-content/uploads/2015/09/27/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD.jpg',comment:'Hello we were waiting for you!'},],
    newPost:'',
    profile:[

    ],
    statusText: 'Напишите о себе',
}
let reducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_POST:{
            let IdLast = state.post[state.post.length - 1].id
            let newPost = {
                id:IdLast + 1,
                img: action.avatar,
                comment : state.newPost,
            }
            return {
                ...state,
                post : [...state.post,newPost],
            }
        }
        case CHANGE_POST: {
            return{
                ...state,
                newPost:action.text
            }
        }
        case UPDATE_PROFILE:{
            return{
                ...state,
                profile: [action.newProfile]
            }
        }
        case SET_STATUS:{
            return{
                ...state,
                statusText: action.newStatusText
            }
        }
        case SET_PHOTO:{
            return{
                ...state,
                profile: [{...state.profile[0], photos: action.newPhoto}]
            }
        }
        case SET_PROFILE:{
            return{
                ...state,
                profile: action.newProfile
            }
        }
        case DELETE_POSTS:{
            return{
                ...state,
                post: null
            }
        }
        case CHECK_POSTS:{
            return{
                ...state,
                post: JSON.parse(localStorage.getItem("posts")) !== null 
                ? JSON.parse(localStorage.getItem("posts")) 
                : [{id:0,img:'https://gimn4vn.ru/wp-content/uploads/2015/09/27/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD.jpg',comment:'Hello we were waiting for you!'},]
            }
        }
        default:{
            return state
        }
    }
}
export const addPostsCreateAction = (avatar)=>({type: ADD_POST, avatar})
export const changePostsCreateAction = (text)=>({type : CHANGE_POST, text})
export const updateProfile = (newProfile)=>({type:UPDATE_PROFILE, newProfile})
export const changeStatus = (newStatusText)=>({type:SET_STATUS, newStatusText})
export const changePhoto = (newPhoto)=>({type:SET_PHOTO,newPhoto})
export const deletePosts = ()=> ({type: DELETE_POSTS})
export const checkPosts = ()=> ({type: CHECK_POSTS})

export const getStatus = (id)=> async dispatch=>{
    const response = await ProfileApi.getStatus(id)
    dispatch(changeStatus(response.data))
}
export const updateStatus = (status)=> async dispatch=>{
    const response = await ProfileApi.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(changeStatus(status))
    }
    
}
export const getUserProfile = (userId)=> async dispatch =>{
    const response = await ProfileApi.getProfile(userId)
    dispatch(updateProfile(response))
}
export const updatePhoto = (photo)=> async dispatch=>{
    const response = await ProfileApi.updatePhoto(photo)
    if(response.data.resultCode === 0){
        dispatch(changePhoto(response.data.data.photos))
    }
}
export const updateAccountProfile = (profile)=> async (dispatch,getState)=>{
    const userId = getState().auth.id
    const response = await ProfileApi.updateProfile(profile)
    if(response.data.resultCode === 0){ 
        dispatch(getUserProfile(userId))
    }
}
export default reducer