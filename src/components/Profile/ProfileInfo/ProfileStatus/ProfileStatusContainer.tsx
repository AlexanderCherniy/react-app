import { actions } from "../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { AppState } from "../../../../redux/store-redux";
import { ItemType } from "../ProfileContacts/ProfileContactsForm";
import { dataType } from "../../../../redux/auth-reducer";
import { ProfileType } from "../../../../redux/GlobalTypes";
type Props = {
    // userProfile: Array<ProfileType>
    // activeContactsProps: boolean
    item: ItemType
    // userData: dataType
    // ProfileItem: ProfileType
    // changeText: boolean
    // changeTextFunc: (ref:any)=> void
    // addChangeText: ()=> void
    // removeChangeText: ()=> void
    // updatePhoto: (e:HTMLInputElement)=> void
    getStatus: (id:number)=> void
    updateStatus: (statusText:string|null)=> void
    // changeStatus: (ref: any)=> void
    statusText: string
    // changeMode: boolean
    // setChangeMode: (boolean: boolean)=> void
    // activeContacts: boolean
    // setActiveContacts: (activeContacts: boolean)=> void
    // updateAccountProfile: (values: any) => void
    statusTextProps: string
    itemProps: ItemType
    userDataProps: dataType
    changeText: boolean
    changeTextFunc: (ref:any)=> void
    addChangeText: ()=> void
    removeChangeText: ()=> void
}
const ProfileStatusContainer:React.FC<Props> = props =>{
    const [changeText, setChangeText] = useState(false)
    const dispatch = useDispatch()
    const changeStatus = (newStatus: string)=> dispatch(actions.changeStatus(newStatus))
    useEffect(()=>{
        props.getStatus(props.userDataProps.id)
    }, [props.userDataProps.id])
    const addChangeText = ()=> setChangeText(true)
    const removeChangeText = ()=>{
        setChangeText(false)
        props.updateStatus(props.statusText)
    }
    const changeTextFunc = (ref:any)=>{
        changeStatus(ref.current.value)
    }
    return(
        <ProfileStatus statusTextProps = {props.statusText} itemProps = {props.item} userDataProps = {props.userDataProps} addChangeText={addChangeText} removeChangeText={removeChangeText}
                       changeTextFunc={changeTextFunc} changeText={changeText}/>
    )
}
export default ProfileStatusContainer