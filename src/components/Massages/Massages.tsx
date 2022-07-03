import mClas from './Massages.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store-redux';
import { getMassages } from '../../redux/massages-reselects';
import { actions } from '../../redux/massages-reducer'
const Massages: React.FC = (props) => {

    const shortUsers = useSelector((state: AppState) => state.massagesPage.users.map(user => <Users key={user.userId} online={user.online}
    userPhoto = { user.userPhoto }
    userId = { user.userId } userName = { user.userName } />))

    const shortMassages = useSelector((state:AppState)=>getMassages(state).map(massage => <UsersMassages key={massage.Id} massage={massage.massage} /> ))
    const newMassageText = useSelector((state:AppState)=>state.massagesPage.newMassageText)
    
    const dispatch = useDispatch()
    const createPostDispatch = () => dispatch(actions.massageActionCreator())
    const massageChangeDispatch = (text: string) => dispatch(actions.massageChangeActionCreator(text))


    const createRef = React.createRef()
    const createPost = () => {
        createPostDispatch()
    }
    const massageChange = () => {
        //@ts-ignore
        const text = createRef.current.value
        massageChangeDispatch(text)
    }

    return (
        <main className={mClas.massages}>
            <div className={mClas.container}>
                <div className={mClas.users}>
                    {shortUsers}
                </div>
                <div className={mClas.userMassages}>
                    <div className={mClas.massage}>
                        {shortMassages}
                    </div>
                    <div className={mClas.formsContainer}>
                        <textarea placeholder='Напишите сообщение...' className={mClas.textarea}
                            //@ts-ignore
                            ref={createRef}
                            onChange={massageChange} value={newMassageText} />
                        <button className={mClas.button} onClick={createPost} >Send</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
type UsersType = {
    online: string
    userPhoto: string
    userName: string
    userId: number
}
export const Users:React.FC<UsersType> = props => {
    let online = props.online
    online === 'true' ? online = '#81b53e' : online = '#f0ad4e'
    return (
        <div className={mClas.user}>
            <NavLink to={'/massages/' + props.userId} className={link => link.isActive ? mClas.activeUser : mClas.user}>
                <img src={props.userPhoto} alt="" />
                {props.userName}
                <div style={{ background: online }} className={mClas.online}></div>
            </NavLink>
        </div>
    )
}
type UsersMassagesType = {
    massage: string
}
export const UsersMassages:React.FC<UsersMassagesType> = props => {
    return (
        <div className={mClas.massage}>
            {props.massage}
        </div>
    )
}
export default Massages;