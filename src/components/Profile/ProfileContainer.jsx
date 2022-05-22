import Profile from './Profile';
import React from 'react';
import {getStatus, updateProfile, updateStatus} from '../../redux/profile-reducer'
import * as axios from 'axios';
import { connect } from 'react-redux';
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import AnonimGoLogin from '../../noc/noc'
import { compose } from 'redux';

let WithRouter = ()=>{
    let ComponentWithRouterProp = props =>{
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return(<ProfileContainer {...props} router={{location,navigate,params}}/>)
    }
    return ComponentWithRouterProp
}
class ProfileContainer extends React.Component{ 
    isMe = false
    componentDidUpdate(){
        let userId = this.props.router.params.userId
            if(!userId && this.isMe === false){
                this.isMe = true
                userId = this.props.userData.id
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>
                this.props.updateProfile(response.data)
            ) 
        }
    }
    componentWillUnmount = ()=> this.isMe = false
    componentDidMount(){
        let userId = this.props.router.params.userId
        if(!userId) userId = this.props.userData.id
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>
            this.props.updateProfile(response.data)
        )

    }
    render(){
        return <Profile {...this.props}/>
    }
}
const mapStateToProps = state =>{
    return{
        userProfile : state.profilePage.profile,
        userData: state.auth,
        statusText: state.profilePage.statusText
    }
}

export default compose(
    connect(mapStateToProps,{updateProfile,getStatus,updateStatus}),
    WithRouter,
    AnonimGoLogin
)(ProfileContainer)