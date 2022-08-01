import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChatActions, startMessagesListening, stopMessagesListening } from "../../../redux/chat-reducer";
import c from "./Chat.module.scss";
import ChatForm from "./ChatForm/ChatForm";
import Message from "./Message/Message";

type ChatType = {
    
}
const Chat: React.FC<ChatType> = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        //@ts-ignore
        dispatch(startMessagesListening()) 
        return ()=>{
            //@ts-ignore
            dispatch(stopMessagesListening()) 
        }
    }, [])
    return (
        <div className={c.ShieldWrapper}>
            <div className={c.wrapper}>
                <Message />
            </div>
        </div>
    )
}
export default Chat
