import profileReducer from "./profile-reducer"
import massagesReducer from "./massages-reducer"
import settingsReducer from "./settings-reducer"
let refreshPath = ()=>{}

// пример использования get и set ↓
// let obj = {
//     _man:'LEXA',
//     set(man){
//         this._man = man;
//         console.log(man + ' ВОТ КАК ВАС ЗОВУТ!');
//     },
//     getMan(){
//         return this._man
//     }
// }
// obj.set(obj.getMan())
// пример использования get и set ↑
let store = {
    _state :{
        profilePage:{
            post:[
                {id:0,img:'https://img.freepik.com/free-vector/man-is-thinking-about-something-and-looking-for-a-solution_376167-16.jpg',comment:'Какие кроссовки купить?'},
                {id:1,img:'https://cdnn21.img.ria.ru/images/149097/03/1490970379_141:0:922:781_1920x0_80_0_0_172e20f06f580aad4fb36bbd8387b12b.jpg',comment:'Кроссовки человека паука самые лучшие!'},
                {id:2,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Я думаю ададис лучше!'},
                {id:3,img:'https://stihi.ru/pics/2017/02/05/6700.jpg',comment:'Вы о чем? '},
            ],
            newPost:'',
            profile:[
                {Id:0,favoriteImg:'https://bellyupsports.com/wp-content/uploads/2020/07/merlin_166319154_b92292b2-1a0f-437d-a694-8a97b586227d-mobileMasterAt3x.jpg',
                 photo:'https://teatral-online.ru/i/ph/xl/xl_20191211150357.jpg',name:'Dmitry A.',dateBirth:'Date Of Birth: 11 February',city:'City: Moscow',
                 favoriteWebSite: 'Web Site: https://google.com'
                }
            ]
        },
        massagesPage:{
            users:[
                {userId:1 ,userName:'Svetlana',userPhoto:'https://i.pinimg.com/736x/1d/1e/47/1d1e471310a3b0e6f3a154fc6d71b323.jpg', online:'true'},
                {userId:2 ,userName:'Vlad',userPhoto:'https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg',
                online:'true'},
                {userId:3 ,userName:'Alex',userPhoto:'https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg',
                online:'true'},
                {userId:4 ,userName:'Vika',userPhoto:'https://i.pinimg.com/736x/1d/1e/47/1d1e471310a3b0e6f3a154fc6d71b323.jpg',
                online:'false'},
                {userId:5 ,userName:'Mike',userPhoto:'https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg',
                online:'true'},
                {userId:6 ,userName:'Karl',userPhoto:'https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg',
                online:'true'},
                {userId:7 ,userName:'Anonim',userPhoto:'https://stihi.ru/pics/2017/02/05/6700.jpg',
                online:'false'},
            ],
            massages:[
                {Id:1 ,massage:'HI! I Svetlana!'},
                {Id:2 ,massage:'HAHAHAHAHHAH YOU IN THIS SITE!!!! FAGAHAHAHHAHA'},
                {Id:3 ,massage:"Let's go play basketball! Go to the school along the path!"},
                {Id:4 ,massage:'Are you free in the evening? :)'},
                {Id:5 ,massage:'Are you going to the party tonight?'},
                {Id:6 ,massage:'I am a gungster!'},
                {Id:7 ,massage:'你不認識我！高的'},
            ],
            newMassageText:''
        },
        sideBar:{
            sideBarLinks:[
                {id:1,to:'/massages',text:'Massages'},
                {id:2,to:'/',text:'PROFILE'},
                {id:3,to:'/music',text:'MUSIC'},
                {id:4,to:'/games',text:'GAMES'},
                {id:5,to:'/photos',text:'PHOTOS'},
                {id:6,to:'/help',text:'HELP'},
                {id:7,to:'/settings',text:'SETTINGS'},
            ],  
        },
        header:{
            headerLinks: [
                {id:1,text:'OTHER'},
                {id:2,text:'HELP'},
                {id:3,text:'SETTINGS'},
            ],
        },
        settings:{
            newText:'Settingsss'
        }
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.massagesPage = massagesReducer(this._state.massagesPage,action)
        this._state.settings = settingsReducer(this._state.settings, action)
        subscribe(this.getState())
    },
    getState(){
        return this._state
    },
    subscribe (observer){
        refreshPath = observer
    },
}
export default store;
window.store = store





//                 {userId:1 ,massage:'HI! I Svetlana!'},
//                 {userId:2 ,massage:'HAHAHAHAHHAH YOU IN THIS SITE!!!! FAGAHAHAHHAHA',massageYour:'and???',path:'2/*'},
//                 {userId:3 ,massage:"Let's go play basketball! Go to the school along the path!",massageYour:'OK GOOO!!!!',path:'3/*'},
//                 {userId:4 ,massage:'Are you free in the evening? :)',massageYour:'NO!',path:'4/*'},
//                 {userId:5 ,massage:'Are you going to the party tonight?',path:'5/*'},
//                 {userId:6 ,massage:'I am a gungster!',massageYour:'I too!',path:'6/*'},
//                 {userId:7 ,massage:'你不認識我！高的', massageYour:'WTF???', path:'7/*'},