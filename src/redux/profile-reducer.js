import { ProfileApi } from "../api/api-dal"

const ADD_POST = 'profile-reducer/ADD-POST'
const CHANGE_POST = 'profile-reducer/CHANGE-POST'
const UPDATE_PROFILE = 'profile-reducer/UPDATE_PROFILE'
const SET_STATUS = 'profile-reducer/CHANGE_STATUS'
const SET_PHOTO = 'profile-reducer/SET_PHOTO'
const SET_PROFILE = 'profile-reducer/SET_PROFILE'
let initialState = {
    post:[
        {id:0,img:'https://img.freepik.com/free-vector/man-is-thinking-about-something-and-looking-for-a-solution_376167-16.jpg',comment:'Какие кроссовки купить?'},
        {id:1,img:'https://cdnn21.img.ria.ru/images/149097/03/1490970379_141:0:922:781_1920x0_80_0_0_172e20f06f580aad4fb36bbd8387b12b.jpg',comment:'Кроссовки человека паука самые лучшие!'},
        {id:2,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Я думаю ададис лучше!'},
        {id:3,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Вы о чем? '},
    ],
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
                img:'https://stihi.ru/pics/2017/02/05/6700.jpg',
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
        default:{
            return state
        }
    }
}
export const addPostsCreateAction = ()=>({type: ADD_POST})
export const changePostsCreateAction = (text)=>({type : CHANGE_POST, text})
export const updateProfile = (newProfile)=>({type:UPDATE_PROFILE, newProfile})
export const changeStatus = (newStatusText)=>({type:SET_STATUS, newStatusText})
export const changePhoto = (newPhoto)=>({type:SET_PHOTO,newPhoto})
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