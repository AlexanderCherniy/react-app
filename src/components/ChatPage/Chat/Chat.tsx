import { Button, Form } from "antd";
import { Formik } from "formik";
import { SubmitButton } from "formik-antd";
import { useEffect, useState } from "react";
import { createField, Textarea } from "../../../Forms/Forms";
import c from "./Chat.module.scss";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
type MessagesItemType = {
    userName: string
    message: string
    userId: number
    photo: string
}
const AmogusPhoto = 'data:image/jpeg;base64,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'
const Message: React.FC = (props) => {
    const [messages, setMessages] = useState<MessagesItemType[]>([])
    useEffect(() => {
        ws.onmessage = e => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => {
                return [...prevMessages, ...newMessages]
            });
        }
    }, [])


    return <div>
        {messages.map((item: MessagesItemType, index) => {
            return <div className={c.message} key={index}>
                <div className={c.flexContainer}>
                    <img style={{ maxWidth: "100px" }} src={item.photo !== null ? item.photo : AmogusPhoto} />
                    <div>
                        <div className={c.userName}>{item.userName}</div>
                        <div className={c.userId}>{item.userId}</div>
                        <div className={c.messageText}>{item.message}</div>
                    </div>
                </div>
                <div className={c.line}></div>
            </div>
        })}
    </div>
}
// const Chat:React.FC = props => {
//     // const [message, setMessage] = useState('')
//     return <Formik
//     initialValues={{ messageForm: '' }}
//     onSubmit={values => {
//         debugger
//         console.log(values);
//         ws.send(values.messageForm)
//         values.messageForm = ''
//     }}>
//     <div className={c.ShieldWrapper}>
//         <div className={c.wrapper}>
//             <h1>Chat</h1>
//              <Message/>
//              <Form>
//                 {createField(undefined, 'messageForm', Textarea, "Send your message...")}
//                 {/* <Textarea onChange={(e)=> setMessage(e.currentTarget.value)} value={message}/> */}
//                 {/* <Button type='primary' htmlType="submit" >SEND</Button> */}
//                 {/* <button type='submit'>Send</button> */}
//                 <SubmitButton htmlType="submit">Send</SubmitButton>
//              </Form>
//         </div>
//     </div>
//     </Formik>
// }
const Chat: React.FC = props => {
    let [message, setMessage] = useState('')
    const sendMessage = () => {
        if(message !== ''){
            ws.send(message)
        }
    }
    return <Formik
        initialValues={{ messageForm: 'asd' }}
        onSubmit={values => {
            debugger
            console.log(values);
            if(values.messageForm !== ''){
                ws.send(values.messageForm)
                values.messageForm = ''
            }
        }}>
        <div className={c.ShieldWrapper}>
            <div className={c.wrapper}>
                <h1>Chat</h1>
                <Message />
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} />
                {/* {createField(undefined, 'messageForm', Textarea, "Send your message...")} */}
                <SubmitButton onClick={sendMessage}>Send</SubmitButton>
            </div>
        </div>
    </Formik>
}
export default Chat


