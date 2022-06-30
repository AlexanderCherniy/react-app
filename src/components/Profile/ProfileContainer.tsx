import Profile from './Profile';
import React, { useEffect } from 'react';
import { updatePhoto, getStatus, updateStatus, updateAccountProfile, actions } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import AnonimGoLogin from '../../noc/hoc'
import { compose } from 'redux';
import { getMyUserProfile } from '../../redux/profile-reselects';
import { ProfileApi, ProfileType } from '../../api/api-dal';
import WithRouters from '../../WithRouter';
import { dataType } from '../../redux/auth-reducer';
import { AppState } from '../../redux/store-redux';

type Props = {
    userProfile: ProfileType
    userData: dataType
    statusText: string
    router: any
    actions: any
    updateAccountProfile: () => void
    updatePhoto: () => void
    updateProfile: (data: any) => void
    getStatus: () => void
    updateStatus: () => void
}
const ProfileContainer: React.FC<Props> = (props) => {
    console.log(props);
    
    let userId = props.router.params.userId
    const getProfileHelper = () => {
        ProfileApi.getProfile(userId).then(data => {
            return props.updateProfile(data)
        }
        )
    }
    useEffect(() => {
        if (!userId) userId = props.userData.id
        getProfileHelper()
    }, [userId])
    return <Profile isMyProfile={!props.router.params.userId} {...props} />
}
const mapStateToProps = (state: AppState) => {
    return {
        userProfile: getMyUserProfile(state),
        userData: state.auth,
        statusText: state.profilePage.statusText,
    }
}
export default compose(
    connect(mapStateToProps, { updateAccountProfile, updatePhoto, getStatus, updateStatus, updateProfile: actions.updateProfile }),
    WithRouters,
    AnonimGoLogin
)(ProfileContainer)