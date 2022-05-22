import { connect } from "react-redux";
import {fillUsers, downloadUsers,followUsers,unfollowUsers} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import { getUsers } from "../../redux/reselects";
class UsersContainer extends React.Component{
    componentDidMount = ()=> this.props.downloadUsers(this.props.usersState.length, this.props.currentPage, this.props.pageSize)
    checkUsers = (p)=> this.props.fillUsers(p,this.props.pageSize)
    render(){
       return <Users  {...this.props} checkUsers={this.checkUsers}/>     
    }
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

export default connect(mapStateToProps,{fillUsers,downloadUsers,followUsers,unfollowUsers})(UsersContainer)