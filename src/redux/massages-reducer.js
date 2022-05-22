let ADD_MASSAGE = 'ADD-MASSAGE'
let CHANGE_MASSAGE = 'CHANGE-MASSAGE'

let initialState = {
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
}

let reducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_MASSAGE: 
            state.massages.push({Id:6, massage: state.newMassageText})
            return state
        case CHANGE_MASSAGE:
            state.newMassageText = action.MassageText
            return state
        default: return state
    }
}
export let massageChangeActionCreator = (text)=>{
    return ({
        type:CHANGE_MASSAGE,
        MassageText:text
    })
}
export let massageActionCreator = ()=>({type:ADD_MASSAGE})
export default reducer