import { NavLink} from 'react-router-dom';
import mClas from './Massages.module.css'
import React from "react";
import {massageChangeActionCreator,massageActionCreator} from '../../redux/massages-reducer'
import Massages from './Massages';
import { connect } from 'react-redux';
import AnonimGoLogin from '../../noc/noc'
import { compose } from 'redux';
const Users = props =>{
    let online = props.online
    online === 'true' ? online = '#81b53e' : online = '#f0ad4e'
    return(
    <div className={mClas.user}>
        <NavLink to={'/massages/' + props.userId} className={link=>link.isActive?mClas.activeUser:mClas.user}>
                <img src={props.userPhoto} alt="" /> 
                {props.userName}
                <div style={{background:online}} className={mClas.online}></div>
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
const mapStateToProps = (state)=>{
    return{
        shortUsers : state.massagesPage.users.map(user => <Users key={user.userId} online = {user.online}
                     userPhoto = {user.userPhoto} userId = {user.userId} userName={user.userName}/>),
        shortMassages : state.massagesPage.massages.map(massage => <UsersMassages key={massage.Id} massage = {massage.massage}/>),
        newMassageText : state.massagesPage.newMassageText,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        createPost : ()=>{
            dispatch(massageActionCreator())
        },
        massageChange : (text)=>{
            dispatch(massageChangeActionCreator(text))
        }
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps) ,AnonimGoLogin)(Massages);