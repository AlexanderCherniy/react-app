import Profile from './Profile';
import React, { useEffect } from 'react';
import { updatePhoto, getStatus, updateStatus, updateAccountProfile, actions } from '../../redux/profile-reducer'
import { connect, useSelector } from 'react-redux';
import AnonimGoLogin from '../../noc/hoc'
import { compose } from 'redux';
import { getMyUserProfile } from '../../redux/profile-reselects';
import WithRouters from '../../WithRouter';
import { AppState } from '../../redux/store-redux';
import { OldURL } from '../../noc/oldURL';
import { ProfileApi } from '../../api/profile-api';
type Props = {
    router: any
    actions: any
    updateAccountProfile: () => void
    updatePhoto: () => void
    updateProfile: (data: any) => void
    getStatus: () => void
    updateStatus: () => void
}
const ProfileContainer: React.FC<Props> = (props) => {
    const userProfile = useSelector(getMyUserProfile)
    const userData = useSelector((state:AppState)=> state.auth)
    const statusText = useSelector((state:AppState)=> state.profilePage.statusText)
    let userId = props.router.params.userId
    const getProfileHelper = () => {
        ProfileApi.getProfile(userId).then(data => {
            return props.updateProfile(data)
        }
        )
    }
    useEffect(() => {
        if (!userId) userId = userData.id
        getProfileHelper()
    }, [userId])
    //@ts-ignore
    return <Profile userProfile = {userProfile}
     userData = {userData} statusText = {statusText} isMyProfile={!props.router.params.userId} {...props} />
}
export default compose<React.ComponentType>(
    connect(null, { updateAccountProfile, updatePhoto, getStatus, updateStatus, updateProfile: actions.updateProfile }),
    WithRouters,
    AnonimGoLogin,
    OldURL
)(ProfileContainer)