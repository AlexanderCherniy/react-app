import { NavLink} from 'react-router-dom';
import mClas from './Massages.module.css'
import React from "react";
import {massageChangeActionCreator,massageActionCreator} from '../../redux/massages-reducer'
import Massages from './Massages';
const Users = props =>{
    return(
    <div className={mClas.user}>
        <NavLink to={'/massages/' + props.userId} className={link=>link.isActive?mClas.activeUser:mClas.user}>
                <img src={props.userPhoto} alt="" /> 
                {props.userName}
        </NavLink>
    </div>
    )
}
const UsersMassages = props =>{
    return(
        <div className={mClas.massage}>
            {props.massage}
        </div>
    )
} 
let MassagesContainer = props =>{
    let shortUsers = props.store.getState().massagesPage.users.map(user => <Users online = {user.online} userPhoto = {user.userPhoto} userId = {user.userId} userName={user.userName}/>)
    let shortMassages = props.store.getState().massagesPage.massages.map(massage => <UsersMassages massage = {massage.massage}/>)
    let createPost = ()=>{
        props.store.dispatch(massageActionCreator())
        props.store.getState().massagesPage.newMassageText = ''
    }
    let massageChange = (text)=>{
        props.store.dispatch(massageChangeActionCreator(text))
    }
    return(<Massages newMassageText ={props.store.getState().massagesPage.newMassageText} createPost = {createPost} massageChange = {massageChange} shortUsers = {shortUsers} shortMassages = {shortMassages}/>)
}

    // let shortMassages = props.state.massages.map(massageEl=><Route path={massageEl.path} element={
    // <UsersMassages massageAnother={massageEl.massageAnother} massageYour={massageEl.massageYour}/>}/>)

 {/* <Routes>
  {shortMassages}
  </Routes> */}
export default MassagesContainer;