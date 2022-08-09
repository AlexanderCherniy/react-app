import { CheckOutlined, SendOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteYourMessage, getConcreteUserMessages } from '../../../redux/massages-reducer';
import { AppState } from '../../../redux/store-redux';
import cn from './UsersMessags.module.scss'

type UsersMassagesType = {
    myId: number
    senderId: number
    userId: number | string
    body: string
    id: string
    viewed: boolean
    photo: string
}
let count = 0
const UsersMassages: React.FC<UsersMassagesType> = props => {

    const myPhoto = useSelector((state: AppState) => state.auth.photo)
    const dispatch = useDispatch()
    const deleteMessage = async (messageID: string, userId: number | string) => {
        //@ts-ignore
        dispatch(deleteYourMessage(messageID, userId))
    }
    useEffect(() => {
        count++
        if (count <= 3) {
            //@ts-ignore
            dispatch(getConcreteUserMessages(window.location.href.split('/')[5]))
        }
    }, [window.location.href.split('/')[5]])
    if (props.senderId === props.myId) {
        return (
            <div style={window.innerWidth <= 450 ? { fontSize: 16 } : { fontSize: 20 }} className={cn.myMessage}>
                <div className={cn.messageHelper}>
                    {/* @ts-ignore */}
                    <img className={cn.myPhoto} src={myPhoto} alt='Avatar' title='User Photo' />
                    <div>
                        {props.body}
                    </div>
                    <div>
                        <div title='Delete your message (only for you)' style={{ marginLeft: 30, cursor: 'pointer', position: 'absolute', right: 10, }} onClick={() => deleteMessage(props.id, props.userId)}>X</div>
                        {props.viewed === true ? <CheckOutlined title='Message was viewed' className={cn.messageViewed} /> : <SendOutlined title='Message was not viewed' className={cn.messageNotViewed} />}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div style={window.innerWidth <= 450 ? { fontSize: 16 } : { fontSize: 20 }} className={cn.userMassage}>
            <img className={cn.userPhoto} src={props.photo} alt='Avatar' title='User Photo' />
            {props.body}
        </div>
    )
}
export default UsersMassages