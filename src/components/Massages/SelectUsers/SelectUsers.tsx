import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../../redux/store-redux';
import cn from './SelectUsers.module.scss'

type UsersType = {
    hasNewMessages: boolean | string
    userPhoto: string
    userName: string
    userId: number
    userIdURL: string
    setUserIdUrl: any
}
const SelectUsers: React.FC<UsersType> = props => {
    let online = props.hasNewMessages
    online === true ? online = '#81b53e' : online = '#f0ad4e'
    console.log(window.location.href.split('/'));
    
    return (
        
        <div onClick={() => props.setUserIdUrl(window.location.href.split('/')[4] === '#' ? window.location.href.split('/')[6] : window.location.href.split('/')[5])} className={cn.user}>
            <NavLink to={'/massages/' + props.userId} className={link => link.isActive ? cn.activeUser : cn.user}>
                <img src={props.userPhoto} alt="" />
                {props.userName}
                <div style={{ background: online }} className={cn.online}></div>
            </NavLink>
        </div>
    )
}
export default SelectUsers