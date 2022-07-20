import { Dispatch } from "react"
import { DialogsApi } from "../api/messages-api"
import { AllActionType, TypeFunction } from "./store-redux"
const MessagesPageInstructation = "This is the Messages page, select the panel on the top & left and select the interlocutor and write to him, if the panel is empty, or you want to add a new interlocutor, then enter his ID in the form."
const Photo = 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
const initialState = {
    users: [{ id: 111, userName: 'Anonim', photos: {small: Photo, large: null}, hasNewMessages: false }],
    massages: [{ senderId: 0, body: MessagesPageInstructation, photo: Photo, viewed: false, id: '' }],
}
type initialStateType = typeof initialState
const reducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "massages-reducer/ADD_USERS": {
            return {
                ...state,
                users: action.newUsers
            }
        }
        case "massages-reducer/ADD_MESSAGES": {
            return {
                ...state,
                massages: action.newMessages
            }
        }
        default: {
            return state
        }
    }
}
type UserType = {
    userId: number
    userName: string
    userPhoto: string
    online: string
}
type UsersType = Array<UserType>
type ActionType = ReturnType<AllActionType<typeof actions>>
export const actions = {
    addUsers: (newUsers: any) => ({ type: TypeFunction("massages-reducer/ADD_USERS"), newUsers }),
    addMessages: (newMessages: any) => ({ type: TypeFunction("massages-reducer/ADD_MESSAGES"), newMessages }),
    setMessagePhoto: (photo: string) => ({ type: TypeFunction("massages-reducer/SET_MESSAGE_PHOTO"), photo }),
}
export const putDialogWithUsers = (userId: number) => async (dispatch: Dispatch<ActionType>) => {
    const response = await DialogsApi.putDialogWithUsers(userId)
    console.log(response);
    return response
}
export const getAllDialogs = () => async (dispatch: Dispatch<ActionType>) => {
    const response = await DialogsApi.getAllDialogs()
    
    dispatch(actions.addUsers(response))
}
export const getConcreteUserMessages = (userId: number) => async (dispatch: Dispatch<ActionType>) => {
    const response = await DialogsApi.getConcreteUserMessages(userId)
    console.log(response);
    
    dispatch(actions.addMessages(response.items))
}
export const sendMessageToUser = (userId: number, body: string) => async (dispatch: Dispatch<ActionType>) => {
    const response = await DialogsApi.sendMessageToUser(userId, body)
    return response
}
export const deleteYourMessage = (messageId: string, userId: number) => async (dispatch: Dispatch<ActionType>) => {
    const response = await DialogsApi.deleteYourMessage(messageId)
    //@ts-ignore
    dispatch(getConcreteUserMessages(userId))
    return response
}

export default reducer