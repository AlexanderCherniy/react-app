import { CheckOutlined, SendOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteYourMessage } from '../../../redux/massages-reducer';
import cn from './UsersMessags.module.scss'

type UsersMassagesType = {
    myId: number
    senderId: number
    userId: number
    body: string
    id: string
    viewed: boolean
}
const UsersMassages: React.FC<UsersMassagesType> = props => {
    const dispatch = useDispatch()
    const deleteMessage = async (messageID: string, userId: number)=>{
        //@ts-ignore
        dispatch(deleteYourMessage(messageID, userId))   
    }
    if (props.senderId === props.myId) {
        return (
            // @ts-ignore
            <div style={window.innerWidth <= 450 ? {fontSize: 16} : {fontSize: 20}} className={cn.myMessage}>
                <span className={cn.messageHelper}>
                    {props.body}
                    {props.viewed === true ? <CheckOutlined className={cn.messageViewed} /> : <SendOutlined className={cn.messageNotViewed} />}
                </span>
                <div  title='Delete your message (only for you)' style={{marginLeft: 30, cursor: 'pointer'}} onClick={()=> deleteMessage(props.id, props.userId)}>X</div>
            </div>
        )
    }
    return (
        <div style={window.innerWidth <= 450 ? {fontSize: 16} : {fontSize: 20}} className={cn.userMassage}>
            {props.body}
        </div>
    )
}
export default UsersMassages