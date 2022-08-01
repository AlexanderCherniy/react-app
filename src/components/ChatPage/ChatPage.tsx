import c from "./ChatPage.module.scss";
import Chat from './Chat/Chat'
import ChatForm from "./Chat/ChatForm/ChatForm";
import React, { useState } from "react";
import BreadCrumbContainer from "../BreadCrumb/BreadCrumb";


const ChatPage: React.FC = props => {
    const [CloseErrorMessage ,setCloseErrorMessage] = useState<boolean>(false)
    return <div >
        <div className={c.wrapper}>
            <BreadCrumbContainer page='Chat' containerPage='ChatPage'/>
        </div>
        <Chat />
        <ChatForm CloseErrorMessage = {CloseErrorMessage}/>
    </div>
}

export default ChatPage