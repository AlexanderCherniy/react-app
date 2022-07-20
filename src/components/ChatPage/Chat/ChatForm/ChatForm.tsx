import { Button } from "antd"
import { Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { createField, Textarea } from "../../../../Forms/Forms"
import { SendMessage } from "../../../../redux/chat-reducer"
import { AppState } from "../../../../redux/store-redux"
import c from './ChatForm.module.scss'
type PropsChatForm = {
    CloseErrorMessage: boolean
}
const ChatForm: React.FC<PropsChatForm> = props => {
    const disableButtonStatus = useSelector((state:AppState)=> state.chat.disableButtonStatus)
    const dispatch = useDispatch()
    return <Formik
        initialValues={{ messageForm: '' }}
        onSubmit={async values => {
            if (values.messageForm !== '') {
                //@ts-ignore
                await dispatch(SendMessage(values.messageForm))
                values.messageForm = ''
            }
        }}>
                <Form>
                {props.CloseErrorMessage === true ? <div>Check Your Internet Connection</div> : <></>}
                    {createField(undefined, 'messageForm', Textarea, "Send your message...")}
                    <Button type='primary' disabled={disableButtonStatus !== 'ready'} htmlType="submit">LogIn</Button>
                </Form>
    </Formik>
}
export default ChatForm