import { Button } from "antd"
import { Form, Formik } from "formik"
import { SubmitButton } from "formik-antd"
import { useDispatch, useSelector } from "react-redux"
import { createField, Textarea } from "../../../../Forms/Forms"
import { SendMessage } from "../../../../redux/chat-reducer"
import { AppState } from "../../../../redux/store-redux"
import { SendOutlined } from '@ant-design/icons';
import c from './ChatForm.module.scss'
type PropsChatForm = {
    CloseErrorMessage: boolean
}
const ChatForm: React.FC<PropsChatForm> = props => {
    const disableButtonStatus = useSelector((state: AppState) => state.chat.disableButtonStatus)
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
        <Form style={{display: 'grid', gridTemplateColumns: '4fr 0.4fr', gap: 10 ,maxWidth: 800, alignItems: 'center'}}>
            {props.CloseErrorMessage === true ? <div>Check Your Internet Connection</div> : <></>}
            {createField(c.Textarea, 'messageForm', Textarea, "Send your message...")}
            {/* <Button type='primary' disabled={disableButtonStatus !== 'ready'} htmlType="submit">Send</Button> */}
            {/* <SubmitButton type='default' className={mClas.button}><SendOutlined style={{fontSize: 21}}/></SubmitButton> */}
            <SubmitButton style={{height: '100%'}} type='default'><SendOutlined style={{fontSize: 21}}/></SubmitButton>
            {/* {createField<MessagesValuesKeys>(mClas.textarea, 'message', Textarea, "Напишите сообщение...")} */}
        </Form>
    </Formik>
}
export default ChatForm