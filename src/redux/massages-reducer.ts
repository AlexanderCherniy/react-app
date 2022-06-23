const ADD_MASSAGE = 'massages-reducer/ADD-MASSAGE'
const CHANGE_MASSAGE = 'massages-reducer/CHANGE-MASSAGE'
const ADD_USERS = "massages-reducer/ADD_USERS"
let initialState = {
    users: [
        { userId: 1, userName: 'Svetlana', userPhoto: 'https://i.pinimg.com/736x/1d/1e/47/1d1e471310a3b0e6f3a154fc6d71b323.jpg', online: 'true' },
        {
            userId: 2, userName: 'Vlad', userPhoto: 'https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg',
            online: 'true'
        },
        {
            userId: 3, userName: 'Alex', userPhoto: 'https://img.huffingtonpost.com/asset/5d02cac22400008c1790be69.jpeg?ops=scalefit_720_noupscale',
            online: 'true'
        },
        {
            userId: 4, userName: 'Vika', userPhoto: 'https://cs13.pikabu.ru/avatars/3323/x3323473-1169033777.png',
            online: 'false'
        },
        {
            userId: 5, userName: 'Mike', userPhoto: 'https://i.redd.it/uyv2gsmqcwh61.jpg',
            online: 'true'
        },
        {
            userId: 6, userName: 'Karl', userPhoto: 'https://i.pinimg.com/736x/e3/ee/94/e3ee945d31d61e6ea2a43c95d793df5c.jpg',
            online: 'false'
        },
        {
            userId: 7, userName: 'Anonim', userPhoto: 'https://stihi.ru/pics/2017/02/05/6700.jpg',
            online: 'false'
        },
    ],
    massages: [
        { Id: 1, massage: 'HI! I Svetlana!' },
        { Id: 2, massage: 'HAHAHAHAHHAH YOU IN THIS SITE!!!! FAGAHAHAHHAHA' },
        { Id: 3, massage: "Let's go play basketball! Go to the school along the path!" },
        { Id: 4, massage: 'Are you free in the evening? :)' },
        { Id: 5, massage: 'Are you going to the party tonight?' },
        { Id: 6, massage: 'I am a gungster!' },
        { Id: 7, massage: '你不認識我！高的' },
    ],
    newMassageText: ''
}
type initialStateType = typeof initialState
const reducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_MASSAGE: {
            let massagesId = state.massages
            let IdLast = massagesId[massagesId.length - 1].Id
            let newMassage = { Id: IdLast + 1, massage: state.newMassageText }
            return {
                ...state,
                massages: [...state.massages, newMassage],
                newMassageText: ''
            }
        }
        case CHANGE_MASSAGE: {
            return {
                ...state,
                newMassageText: action.MassageText
            }
        }
        case ADD_USERS: {
            return {
                ...state,
                users: action.newUsers
            }
        }
        default: {
            return state
        }
    }
}
type massageChangeActionCreatorType = {
    type: typeof CHANGE_MASSAGE
    MassageText: string
}
export let massageChangeActionCreator = (MassageText: string): massageChangeActionCreatorType => ({ type: CHANGE_MASSAGE, MassageText })
type addUsersActionType = {
    type: typeof ADD_USERS
    newUsers: Object
}
export const addUsers = (newUsers: Object):addUsersActionType => ({ type: ADD_USERS, newUsers })
type massageActionCreatorType = {
    type: typeof ADD_MASSAGE
}
export let massageActionCreator = ():massageActionCreatorType => ({ type: ADD_MASSAGE })
export default reducer