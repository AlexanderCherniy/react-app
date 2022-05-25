import { addPostsCreateAction, changePostsCreateAction } from "./profile-reducer";
import profileReducer from './profile-reducer'
let state = {
    post:[
        {id:0,img:'https://img.freepik.com/free-vector/man-is-thinking-about-something-and-looking-for-a-solution_376167-16.jpg',comment:'Какие кроссовки купить?'},
        {id:1,img:'https://cdnn21.img.ria.ru/images/149097/03/1490970379_141:0:922:781_1920x0_80_0_0_172e20f06f580aad4fb36bbd8387b12b.jpg',comment:'Кроссовки человека паука самые лучшие!'},
        {id:2,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Я думаю ададис лучше!'},
        {id:3,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Вы о чем? '},
    ],
    newPost:'',
}
describe("test posts", ()=>{
    test('posts added', () => {
        let action = addPostsCreateAction("HAHAHAHA")
        let newState = profileReducer(state,action)
        expect(newState.post.length).toBe(5)
    }); 
    test('new post worked', () => {
        let action = changePostsCreateAction("YES")
        let newState = profileReducer(state,action)
        expect(newState.newPost).toBe("YES")
    });     
})