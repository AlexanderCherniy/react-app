import Profile from './Profile';
import React, { useEffect } from 'react';
import { getStatus, updateProfile, updateStatus } from '../../redux/profile-reducer'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import AnonimGoLogin from '../../noc/noc'
import { compose } from 'redux';
import { getMyUserProfile } from '../../redux/reselects';

let WithRouter = () => {
    let ComponentWithRouterProp = props => {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return <ProfileContainer {...props} router={{ location, navigate, params }} />
    }
    return ComponentWithRouterProp
}
const ProfileContainer = props => {
    let isMe = false
    let userId = props.router.params.userId

    useEffect(() => {
        if (!userId) userId = props.userData.id
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response =>
            props.updateProfile(response.data)
        )
        if (isMe === true) {
            isMe = false
        }
    }, [userId, isMe])

    useEffect(() => {
        if (!userId && isMe === false) {
            isMe = true
            userId = props.userData.id
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response =>
                props.updateProfile(response.data)
            )
        }
    }, [userId])
    return <Profile {...props} />
}
const mapStateToProps = state => {
    return {
        userProfile: getMyUserProfile(state),
        userData: state.auth,
        statusText: state.profilePage.statusText
    }
}

export default compose(
    connect(mapStateToProps, { updateProfile, getStatus, updateStatus }),
    WithRouter,
    AnonimGoLogin
)(ProfileContainer)