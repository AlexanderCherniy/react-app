import mClas from './Massages.module.scss'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store-redux';
import { getAllDialogs, getConcreteUserMessages, sendMessageToUser } from '../../redux/massages-reducer'
import { OldURL } from '../../noc/oldURL';
import { createField, Textarea, Input } from '../../Forms/Forms';
import { Form, Formik } from 'formik';
import { Breadcrumb } from 'antd';
import { putDialogWithUsers } from "../../redux/massages-reducer";
import UsersMassages from './UsersMessages/UsersMessages';
import SelectUsers from './SelectUsers/SelectUsers';
import { SubmitButton } from 'formik-antd';
import { Navigate } from 'react-router-dom';
const Massages: React.FC = () => {
    const [userIdURL, setUserIdUrl] = useState<any>(window.location.href.split('/')[5])
    const myId = useSelector((state: AppState) => state.auth.id)
    const users = useSelector((state:AppState)=> state.massagesPage.users)

    
    const messages = useSelector((state:AppState)=> state.massagesPage.massages)
    users.map((u)=>{
        messages.map(m => {
            if(u.id === m.senderId){
                return m.photo = u.photos.small
            }
        })
    })
    
    const shortUsers = useSelector((state: AppState) => state.massagesPage.users.map((user) => <SelectUsers userIdURL = {userIdURL} setUserIdUrl={setUserIdUrl} key={user.id} hasNewMessages={user.hasNewMessages}
        userPhoto={user.photos.small}
        userId={user.id} userName={user.userName} />))

    const shortMassages = messages.map((massage, index) => <UsersMassages photo = {massage.photo} userId={userIdURL} id={massage.id} viewed={massage.viewed} myId={myId} senderId={massage.senderId} key={index} body={massage.body} />)
    const dispatch = useDispatch()
    type MessagesValues = {
        message: string
        userId: number | string
    }
    type MessagesValuesKeys = keyof MessagesValues
    const initialValues: MessagesValues = {
        message: '',
        userId: ''
    }

    useEffect(() => {
        //@ts-ignore
         dispatch(getAllDialogs())
        //@ts-ignore
        dispatch(getConcreteUserMessages(userIdURL))
        
    }, [userIdURL])
    return <Formik initialValues={initialValues}
        onSubmit={async values => {
            if (values.message !== '' && values.message !== ' ') {
                //@ts-ignore
                await dispatch(sendMessageToUser(userIdURL, values.message))
                values.message = ''
                //@ts-ignore
                dispatch(getConcreteUserMessages(userIdURL))
            }
            if (values.userId !== '') {
                //@ts-ignore
                await dispatch(putDialogWithUsers(values.userId))
                //@ts-ignore
                dispatch(getAllDialogs())
            }
        }}>
        <main className={mClas.massages}>
        {window.location.href.split('/')[5] === undefined && users[0].userName !== 'Anonim' ?
        <Navigate to={'/massages/' + users[0].id}/> : <></>
        }
            <Breadcrumb style={{ margin: '16px 0', }}>
                <Breadcrumb.Item>Start</Breadcrumb.Item>
                <Breadcrumb.Item>MessagesPage</Breadcrumb.Item>
                <Breadcrumb.Item>Messages</Breadcrumb.Item>
            </Breadcrumb>
            <Form className={mClas.SearchUsersFlexContainer}>
                {createField(mClas.InputSearchUsers, 'userId', Input, "Введите ID собеседника")}
                <SubmitButton type='default'>Send</SubmitButton>
            </Form>
            <div className={window.innerWidth <= 1300 ? mClas.containerSmallWidth : mClas.container}>
                <div className={window.innerWidth <= 1300 ? window.innerWidth <= 990 ? window.innerWidth <= 750 ? mClas.users750Width  : mClas.users990Width : mClas.usersSmallWidth : mClas.users}>
                    {shortUsers}
                </div>
                <div className={mClas.userMassages}>
                    <div className={mClas.massage}>
                        {shortMassages}
                    </div>
                    <Form>
                        <div className={mClas.formsContainer}>
                            {createField<MessagesValuesKeys>(mClas.textarea, 'message', Textarea, "Напишите сообщение...")}
                            <SubmitButton className={mClas.button}>Send</SubmitButton>
                        </div>
                    </Form>
                </div>
            </div>
        </main>
    </Formik>

}

const MassagesUrlContainer = OldURL(Massages)
export default MassagesUrlContainer;

