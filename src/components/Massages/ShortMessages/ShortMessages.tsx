import { NavLink } from "react-router-dom"
import { MessagesValues } from "../Messages"
import { SendOutlined } from '@ant-design/icons';
import cn from './ShortMessages.module.scss'
import { createField, Textarea } from "../../../Forms/Forms";
import { Form, SubmitButton } from "formik-antd";
type ShortMessagesType = {
    shortMassages: React.ReactNode
    setReloadesPage: (reloadesPage: number) => void
    reloadesPage: number
}
type MessagesValuesKeys = keyof MessagesValues
const ShortMessages: React.FC<ShortMessagesType> = (props) => {
    return (
        <div className={cn.userMassages}>
            <div className={cn.message}>
                {window.innerWidth <= 900 ? <NavLink onClick={() => props.setReloadesPage(props.reloadesPage + 1)} to={'/massages'}>Back</NavLink> : <></>} 
                {props.shortMassages}
            </div>
            <Form>
                <div className={cn.formsContainer}>
                    {createField<MessagesValuesKeys>(cn.textarea, 'message', Textarea, "Напишите сообщение...")}
                    <SubmitButton type='default' className={cn.button}><SendOutlined style={{fontSize: 21}}/></SubmitButton>
                </div>
            </Form>
        </div>
    )
}
export default ShortMessages