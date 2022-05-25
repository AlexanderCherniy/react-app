import { connect } from "react-redux";
import {fillUsers, downloadUsers,followUsers,unfollowUsers, blocked} from "../../redux/users-reducer";
import Users from "./Users";
import React, { useEffect } from "react";
import { getUsers } from "../../redux/reselects";
const UsersContainer = props =>{
    useEffect(()=>{
        props.downloadUsers(props.usersState.length, props.currentPage, props.pageSize)
    },[props.usersState])
    const checkUsers = (p)=> props.fillUsers(p,props.pageSize)

    return <Users  {...props} checkUsers={checkUsers}/>     
}
const mapStateToProps = state=>{
    return{
        usersState: getUsers(state),
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        loaderState: state.usersPage.loader,
        isBlocked: state.usersPage.isBlocked,
    }
}

export default connect(mapStateToProps,{blocked,fillUsers,downloadUsers,followUsers,unfollowUsers})(UsersContainer)