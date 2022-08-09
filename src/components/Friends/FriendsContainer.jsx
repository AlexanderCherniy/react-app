import { connect } from "react-redux";
import { findUser, newUsers,toggleFollowAC,usersViewerAC, totalCountAC } from "../../redux/friends-reducer";
import * as axios from 'axios'
import React from "react";
import Friends from "./Friends";

class FriendsContainer extends React.Component{
    componentDidMount(){
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageStart}&count=${this.props.pageSize}`).then(response=>{
                this.props.newUsers(response.data.items)
                this.props.totalCountAC(response.data.totalCount)
            })
        }
    }
    updateCheckUsers = (n)=>{
        this.props.usersViewerAC(n)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`).then(response=>{
                this.props.newUsers(response.data.items)
            })
    }
    getRef = React.createRef()
    changeFunc = ()=>{
        let text = this.getRef.current.value
        this.props.findUserText(text)
    }
    render(){ return <Friends  getRef = {this.getRef} changeFunc = {this.changeFunc} {...this.props} updateCheckUsers = {this.updateCheckUsers}
    /> }
    }

const mapStateToProps = state=>{
    return{
        newText : state.friendsPage.findUserText,
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        pageStart: state.friendsPage.pageStart,
        totalCount: state.friendsPage.totalCount,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        findUserText : (text)=>{
            dispatch(findUser(text))
        },
        toggleFollowAC: (userId)=>{
            dispatch(toggleFollowAC(userId))
        },
        newUsers: (users)=>{
            dispatch(newUsers(users))
        },
        usersViewerAC: (pageStart)=>{
            dispatch(usersViewerAC(pageStart))
        },
        totalCountAC: (totalCount)=>{
            dispatch(totalCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendsContainer)