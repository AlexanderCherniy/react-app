type MessageSubscriberType = (messages: MessageSubscriberParamsType)=> void
type ButtonStatusSubscriberType = (status: 'pending' | 'ready')=> void

type MessageSubscriberParamsType = {
    userName: string
    message: string
    userId: number
    photo: string
}


let subscribers = {
    'message': [] as Array<MessageSubscriberType>,
    'button-status': [] as Array<ButtonStatusSubscriberType>
}
type subscribersType = typeof subscribers
type SubscribersNames = keyof subscribersType



let localWS: WebSocket | null = null
const closeHandler = ()=>{
    console.log('CLOSE'); 
    selectButtonDisableStatus("pending")
    setTimeout(connctChannel, 3000)
}
const messageHundler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers['message'].forEach(s => {
        if(s !== null){
            return s(newMessages)
        }
    })
}
const selectButtonDisableStatus = (status: 'pending' | 'ready')=>{
    subscribers['button-status'].forEach(s => s(status))
}
const selectButtonDisableOpenHundler = ()=>{
    selectButtonDisableStatus('ready')
}
const connctChannel = ()=>{
    localWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    if(localWS !== null) {
        localWS.removeEventListener('close', closeHandler)
        localWS.removeEventListener('message', closeHandler)
    }
    localWS.addEventListener('close', closeHandler)
    localWS.addEventListener('message', messageHundler)
    localWS.addEventListener('open', selectButtonDisableOpenHundler)
}

export const ChatApi = {
    start(){
        connctChannel()
    },
    end(){
        subscribers['message'] = []
        subscribers['button-status'] = []
        selectButtonDisableStatus('pending')
        localWS?.close()
        localWS?.removeEventListener('close', closeHandler)
        localWS?.removeEventListener('message', messageHundler)
    },
    subscribe(event: SubscribersNames ,data: MessageSubscriberType | ButtonStatusSubscriberType){
        //@ts-ignore
        subscribers[event].push(data)
    },
    unsubscribe(event: SubscribersNames , data: MessageSubscriberType | ButtonStatusSubscriberType){
        return ()=> {
            //@ts-ignore
            subscribers[event] = subscribers[event].filter( s => s !== data)
        }
    },
    send(message: string){
        localWS?.send(message)
    },
}

