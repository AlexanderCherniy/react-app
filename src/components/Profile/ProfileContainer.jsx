import Profile from './Profile';
import React, { useEffect } from 'react';
import { updatePhoto,getStatus, updateProfile, updateStatus, updateAccountProfile } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import AnonimGoLogin from '../../noc/noc'
import { compose } from 'redux';
import { getMyUserProfile } from '../../redux/profile-reselects';
import { ProfileApi } from '../../api/api-dal';
import WithRouters from '../../WithRouter';

const ProfileContainer = props => {
    let userId = props.router.params.userId
    const getProfileHelper = ()=>{
        ProfileApi.getProfile(userId).then(data =>
            props.updateProfile(data)
        ) 
    }
    useEffect(() => {
        if (!userId)    userId = props.userData.id
        getProfileHelper()
    }, [userId])
    return <Profile isMyProfile = {!props.router.params.userId} {...props} />
}
const mapStateToProps = (state) => {
    return {
        userProfile: getMyUserProfile(state),
        userData: state.auth,
        statusText: state.profilePage.statusText,
    }
}
export default compose(
    connect(mapStateToProps, {updateAccountProfile ,updatePhoto, updateProfile, getStatus, updateStatus }),
    WithRouters,
    AnonimGoLogin
)(ProfileContainer)