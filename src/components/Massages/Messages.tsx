import mClas from './Messages.module.scss'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store-redux';
import { getAllDialogs, getConcreteUserMessages, sendMessageToUser } from '../../redux/massages-reducer'
import { OldURL } from '../../noc/oldURL';
import { createField, Textarea, Input } from '../../Forms/Forms';
import { Form, Formik } from 'formik';
import { putDialogWithUsers } from "../../redux/massages-reducer";
import UsersMassages from './UsersMessages/UsersMessages';
import { SubmitButton } from 'formik-antd';
import BreadCrumbContainer from '../BreadCrumb/BreadCrumb';
import AnonimGoLogin from '../../noc/hoc';
import { compose } from 'redux';
import ShortUsers from './ShortUsers/ShortUsers';
import ShortMessages from './ShortMessages/ShortMessages';
import { getMyUserProfile } from '../../redux/profile-reselects';
export type MessagesValues = {
    message: string
    userId: number | string
}
const Massages: React.FC = () => {
    const [userIdURL, setUserIdUrl] = useState<number | string>(window.location.href.split('/')[6])
    const [reloadesPage, setReloadesPage] = useState<number>(1)
    const myId = useSelector((state: AppState) => state.auth.id)
    const users = useSelector((state: AppState) => state.massagesPage.users)

    const messages = useSelector((state: AppState) => state.massagesPage.massages)
    users.map((u) => {
        messages.map(m => {
            if (u.id === m.senderId) {
                return m.photo = u.photos.small
            }
        })
    })
    const userDataEmail = useSelector((state: AppState)=> state.auth.login)
    
    const shortMassages = messages.map((massage, index) => <UsersMassages photo={massage.photo} userId={userIdURL} id={massage.id} viewed={massage.viewed} myId={myId} senderId={massage.senderId} key={index} body={massage.body} />)
    const dispatch = useDispatch()

    const initialValues: MessagesValues = {
        message: '',
        userId: ''
    }
    let counter = 0
    useEffect(() => {
        counter++
        //@ts-ignore
        dispatch(getAllDialogs())
        //@ts-ignore
        if(counter === 0){
            //@ts-ignore
            dispatch(setUserIdUrl(window.location.href.split('/')[4] === '#' ? window.location.href.split('/')[6] : window.location.href.split('/')[5]))
        }
        //@ts-ignore
        dispatch(getConcreteUserMessages(userIdURL))

    }, [userIdURL])
    // useEffect(()=>{
    //     window.location.href.split('/')[5] === undefined && users[0].userName !== 'Anonim' ?
    //     return <Navigate to={'/massages/' + users[0].id}/> : <></>

    // }, [])
    return <Formik initialValues={initialValues}
        onSubmit={async values => {
            if (values.message !== '' && values.message !== ' ') {
                //@ts-ignore
                await dispatch(sendMessageToUser(userIdURL, values.message))
                values.message = ''
                //@ts-ignore
                dispatch(getConcreteUserMessages(userIdURL))
                //@ts-ignore
                dispatch(getAllDialogs())
            }
            if (values.userId !== '') {
                //@ts-ignore
                await dispatch(putDialogWithUsers(values.userId))
                //@ts-ignore
                dispatch(getAllDialogs())
            }
        }}>
        <main className={mClas.messages}>
            <BreadCrumbContainer page='Messages' containerPage='MessagesPage'/>
            <div style={ window.innerWidth <= 512 ? {} :{display: 'flex'}}>
                <Form className={mClas.SearchUsersFlexContainer}>
                    {createField(mClas.InputSearchUsers, 'userId', Input, "Введите ID собеседника")}
                    <SubmitButton type='default'>Find</SubmitButton>
                </Form>
                {window.innerWidth <= 512 ? <div style={{background: 'white', padding: '8px 20px', borderRadius: 3 ,marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><b>{userDataEmail}</b></div> : <span style={{marginBottom: 9 ,marginLeft: 10 ,background: 'white', padding: '0px 20px', display:'flex', alignItems: 'center'}}><b>{userDataEmail}</b></span>}
            </div>
            <div className={window.innerWidth <= 1300 ? mClas.containerSmallWidth : mClas.container}>
                {window.innerWidth <= 900 ? window.location.href.split('/')[4] === '#'
                    ? window.location.href.split('/')[6] === undefined
                    : window.location.href.split('/')[5] === undefined
                        ? <ShortUsers userIdURL= {userIdURL} setUserIdUrl={setUserIdUrl}/> : <></> : <ShortUsers userIdURL={userIdURL} setUserIdUrl={setUserIdUrl} />}

                {window.innerWidth <= 900 ? window.location.href.split('/')[4] === '#'
                    ? window.location.href.split('/')[6] !== undefined
                    : window.location.href.split('/')[5] !== undefined
                        ?
                        <ShortMessages setReloadesPage={setReloadesPage} reloadesPage={reloadesPage} shortMassages={shortMassages} /> : <></> :
                    <ShortMessages setReloadesPage={setReloadesPage} reloadesPage={reloadesPage} shortMassages={shortMassages} />}
            </div>
        </main>
    </Formik>

}


export default compose<React.ComponentType>(
    AnonimGoLogin,
    OldURL
)(React.memo(Massages))

