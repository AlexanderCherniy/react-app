import { ProfileApi } from "../api/api-dal"

const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST'
const UPDATE_PROFILE = 'UPDATE_PROFILE'
const SET_STATUS = 'CHANGE_STATUS'
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
        default:{
            return state
        }
    }
}
export let addPostsCreateAction = ()=>({type: ADD_POST})
export let changePostsCreateAction = (text)=>({type : CHANGE_POST, text})
export let updateProfile = (newProfile)=>({type:UPDATE_PROFILE, newProfile})
export let changeStatus = (newStatusText)=>({type:SET_STATUS, newStatusText})
export let getStatus = (id)=> dispatch=>{
    ProfileApi.getStatus(id).then(response => {
        dispatch(changeStatus(response.data))
    })
}
export let updateStatus = (status)=> dispatch=>{
    ProfileApi.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(changeStatus(status))
        }
    })
}
export default reducer