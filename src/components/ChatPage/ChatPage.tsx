import c from "./ChatPage.module.scss";
import Chat from './Chat/Chat'


const ChatPage: React.FC = props => {
    return <div className={c.ShieldWrapper}>
        <div className={c.wrapper}>
            <h1>ChatPage</h1>
        </div>
        <Chat/>
    </div>
}

export default ChatPage