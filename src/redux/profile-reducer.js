let ADD_POST = 'ADD-POST'
let CHANGE_POST = 'CHANGE-POST'
let initialState = {
    post:[
        {id:0,img:'https://img.freepik.com/free-vector/man-is-thinking-about-something-and-looking-for-a-solution_376167-16.jpg',comment:'Какие кроссовки купить?'},
        {id:1,img:'https://cdnn21.img.ria.ru/images/149097/03/1490970379_141:0:922:781_1920x0_80_0_0_172e20f06f580aad4fb36bbd8387b12b.jpg',comment:'Кроссовки человека паука самые лучшие!'},
        {id:2,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Я думаю ададис лучше!'},
        {id:3,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Вы о чем? '},
    ],
    newPost:'zxcVlad1000-7?',
    profile:[
        {Id:0,favoriteImg:'https://bellyupsports.com/wp-content/uploads/2020/07/merlin_166319154_b92292b2-1a0f-437d-a694-8a97b586227d-mobileMasterAt3x.jpg',
         photo:'https://teatral-online.ru/i/ph/xl/xl_20191211150357.jpg',name:'Dmitry A.',dateBirth:'Date Of Birth: 11 February',city:'City: Moscow',
         favoriteWebSite: 'Web Site: https://google.com'
        }
    ]
}
let reducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:4,
                img:'https://stihi.ru/pics/2017/02/05/6700.jpg',
                comment : state.newPost,
            }
            state.post.push(newPost)
            return state
        case CHANGE_POST: 
            state.newPost = action.text
            return state
        default: return state
    }
}
export let addPostsCreateAction = ()=>({type: ADD_POST})
export let changePostsCreateAction = (text)=>({
    type : CHANGE_POST,
    text:text
})
export default reducer