import { Dispatch } from 'react';
import { AllActionType, TypeFunction } from './store-redux';
import { ChatApi } from '../api/chat-api';
import {v1} from 'uuid'
type MessageAPI = {
    userName: string
    message: string
    userId: number
    photo: string
}
type Message = MessageAPI & {id: string}
const initialState = {
    messages: [] as Array<Message>,
    disableButtonStatus: 'pending' as 'pending' | 'ready'
}
type initialStateType = typeof initialState
const chatReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'chat-reducer/SET_MESSAGES': {
            if(initialState.messages === action.messages || action.messages.length === 1){
                return {
                    ...state,
                    messages: [...state.messages, ...action.messages].map(m=> ({...m, id: v1()}) ).filter((m, index, array)=> index >= array.length - 100)
                }
            }
            else{
                return {
                    ...state,
                    messages: action.messages 
                }
            }
        }
        case 'chat-reducer/SET_DISABLE_BUTTON_STATUS': {
            return{
                ...state,
                disableButtonStatus: action.disableButttonStatus
            }
        }
       
        default: return state
    }
}
export type ActionType = ReturnType<AllActionType<typeof ChatActions>>
export type dataType = {
    email: string | null
    id: number
    login: string | null
}
export const ChatActions = {
    setMessages: (messages: Array<Message>) => ({ type: TypeFunction("chat-reducer/SET_MESSAGES"), messages }),
    setDisableButtonStatus: (disableButttonStatus: 'pending' | 'ready') => ({ type: TypeFunction("chat-reducer/SET_DISABLE_BUTTON_STATUS"), disableButttonStatus }),
}
let _newMessageHundler: ((messages: Array<Message>) => void) | null = null
let lastMessages: any = [{message: "test111",
photo: "test111test2333",
userId: 111,
userName: "test111"}]
const newMessagesHundlerCreator = (dispatch: any)=>{
    if(_newMessageHundler === null) {
        _newMessageHundler = (messages)=>{
            if(lastMessages[0].message !== messages[0].message){
                lastMessages = messages
                dispatch(ChatActions.setMessages(messages))
            }
            else console.log('ДВА ОДИНАКОВЫХ СООБЩЕНИЯ!');
            
        }
    }
    return _newMessageHundler
}
let _buttonStatusMessageHundler: ((buttonStatus: 'pending' | 'ready') => void) | null = null
const buttonStatusHundlerCreator = (dispatch: any)=>{
    if(_buttonStatusMessageHundler === null) {
        _buttonStatusMessageHundler = (newButtonStatus)=>{
            console.log(newButtonStatus);
            dispatch(ChatActions.setDisableButtonStatus(newButtonStatus)) 
        }
    }
    return _buttonStatusMessageHundler
}
export const startMessagesListening = () => async (dispatch: Dispatch<ActionType>) => {
    //@ts-ignore
    ChatApi.subscribe('message' ,newMessagesHundlerCreator(dispatch))
    //@ts-ignore
    ChatApi.subscribe('button-status' ,buttonStatusHundlerCreator(dispatch))
    ChatApi.start()
}
export const stopMessagesListening = () => async (dispatch: Dispatch<ActionType>) => {
    //@ts-ignore
    ChatApi.unsubscribe('message' ,newMessagesHundlerCreator(dispatch))
    //@ts-ignore
    ChatApi.unsubscribe('button-status' ,buttonStatusHundlerCreator(dispatch))
    ChatApi.end()
}
export const SendMessage = (message: string) => async (dispatch: Dispatch<ActionType>) => {
    ChatApi.send(message)
}

export default chatReducer