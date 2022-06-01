import { changeStatus } from "../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
const ProfileStatusContainer = props =>{
    const [changeText, setChangeText] = useState(false)
    useEffect(()=>{
        props.getStatus(props.userData.id)
    }, [props.userData.id])
    const addChangeText = ()=> setChangeText(true)
    const removeChangeText = ()=>{
        setChangeText(false)
        props.updateStatus(props.statusText)
    }
    const changeTextFunc = (ref)=>{
        props.changeStatus(ref.current.value)
    }
    return(
        <ProfileStatus  {...props} addChangeText={addChangeText} removeChangeText={removeChangeText}
                       changeTextFunc={changeTextFunc} changeText={changeText}/>
    )
}
let mapStateToProps = (state)=>{
    return{
        usersState: state.usersPage.users
    }
}
export default compose(
    connect(mapStateToProps,{changeStatus}),
)(ProfileStatusContainer)