import mClas from './Massages.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store-redux';
import { getMassages } from '../../redux/massages-reselects';
import { actions } from '../../redux/massages-reducer'
import { OldURL } from '../../noc/oldURL';
import { createField, Textarea } from '../../Forms/Forms';
import { Form, Formik } from 'formik';
import { Breadcrumb } from 'antd';
const Massages: React.FC = (props) => {

    const shortUsers = useSelector((state: AppState) => state.massagesPage.users.map(user => <Users key={user.userId} online={user.online}
        userPhoto={user.userPhoto}
        userId={user.userId} userName={user.userName} />))

    const shortMassages = useSelector((state: AppState) => getMassages(state).map(massage => <UsersMassages key={massage.Id} massage={massage.massage} />))

    const dispatch = useDispatch()
    const createPostDispatch = (message: string) => dispatch(actions.massageActionCreator(message))
    const createPost = (message: string) => {
        createPostDispatch(message)
    }
    type MessagesValues = {
        message: string
    }
    type MessagesValuesKeys = keyof MessagesValues
    const initialValues: MessagesValues = {
        message: ''
    }
    return <Formik initialValues={initialValues}
        onSubmit={async values => {
            if (values.message !== '' && values.message !== ' ') {
                createPost(values.message)
                values.message = ''
            }
        }}>
        <Form>
            <main className={mClas.massages}>
                <Breadcrumb style={{ margin: '16px 0', }}>
                    <Breadcrumb.Item>Start</Breadcrumb.Item>
                    <Breadcrumb.Item>MessagesPage</Breadcrumb.Item>
                    <Breadcrumb.Item>Messages</Breadcrumb.Item>
                </Breadcrumb>
                <div className={mClas.container}>
                    <div className={mClas.users}>
                        {shortUsers}
                    </div>
                    <div className={mClas.userMassages}>
                        <div className={mClas.massage}>
                            {shortMassages}
                        </div>
                        <div className={mClas.formsContainer}>
                            {createField<MessagesValuesKeys>(mClas.textarea, 'message', Textarea, "Напишите сообщение...")}
                            <button className={mClas.button} type='submit' >Send</button>
                        </div>
                    </div>
                </div>
            </main>
        </Form>
    </Formik>

}
type UsersType = {
    online: string
    userPhoto: string
    userName: string
    userId: number
}
export const Users: React.FC<UsersType> = props => {
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
export const UsersMassages: React.FC<UsersMassagesType> = props => {
    return (
        <div className={mClas.massage}>
            {props.massage}
        </div>
    )
}
const MassagesUrlContainer = OldURL(Massages)
export default MassagesUrlContainer;