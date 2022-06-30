import { actions } from "../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { AppState } from "../../../../redux/store-redux";
type Props = {
    statusText: string
    item: any
    userData:{
        id:number
    }
    getStatus: (id:number)=> void
    updateStatus: (statusText:string|null)=> void
    changeStatus: (ref: any)=> void
}
const ProfileStatusContainer:React.FC<Props> = props =>{
    const [changeText, setChangeText] = useState(false)
    useEffect(()=>{
        props.getStatus(props.userData.id)
    }, [props.userData.id])
    const addChangeText = ()=> setChangeText(true)
    const removeChangeText = ()=>{
        setChangeText(false)
        props.updateStatus(props.statusText)
    }
    const changeTextFunc = (ref:any)=>{
        props.changeStatus(ref.current.value)
    }
    return(
        <ProfileStatus  {...props} addChangeText={addChangeText} removeChangeText={removeChangeText}
                       changeTextFunc={changeTextFunc} changeText={changeText}/>
    )
}
const mapStateToProps = (state:AppState)=>{
    return{
        usersState: state.usersPage.users
    }
}
export default compose(
    connect(mapStateToProps,{changeStatus: actions.changeStatus}),
)(ProfileStatusContainer)