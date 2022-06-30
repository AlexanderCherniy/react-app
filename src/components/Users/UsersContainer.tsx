import { connect } from "react-redux";
import {fillUsers, downloadUsers,followUsers,unfollowUsers, blocked, toggleErrorStatus, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import React, { useEffect } from "react";
import { getError, getUsers } from "../../redux/users-reselects";
import { AppState } from "../../redux/store-redux";
type Props = {
    usersState: UserType[]
    currentPage: number
    pageSize: number
    error: boolean
    loaderState: boolean
    isBlocked: number[]
    totalCount: number
    followUsers: (id:number)=> void
    unfollowUsers: (id:number)=> void
    toggleErrorStatus: (status:boolean)=> void
    checkUsers: (p:number)=> void
    downloadUsers: (usersStateLength: number, currentPage:number, pageSize:number)=> void
    fillUsers:  (p:number,pageSize:number) => void
}
const UsersContainer:React.FC<Props> = props =>{
    useEffect(()=>{
        props.downloadUsers(props.usersState.length, props.currentPage, props.pageSize)
    },[props.usersState])
    const checkUsers = (p:number)=> props.fillUsers(p,props.pageSize)

    return <Users  {...props} checkUsers={checkUsers}/>     
}
const mapStateToProps = (state:AppState)=>{
    return{
        usersState: getUsers(state),
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        loaderState: state.usersPage.loader,
        isBlocked: state.usersPage.isBlocked,
        error: getError(state)
    }
}

export default connect(mapStateToProps,{blocked,fillUsers,downloadUsers,followUsers,unfollowUsers,toggleErrorStatus})(UsersContainer)