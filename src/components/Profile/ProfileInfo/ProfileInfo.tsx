import { useState } from 'react';
import incClass from '.././Profile.module.css';
//@ts-ignore
import ProfileContacts from './ProfileContacts/ProfileContacts';
//@ts-ignore
import ProfileContactsForm from './ProfileContacts/ProfileContactsForm';
//@ts-ignore
import { ButtonChange, MyProfile, NoPhoto } from './ProfileInfoHelper';
//@ts-ignore
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
import cn from 'classnames'

type Props = {
  userProfile: any
  updatePhoto: (e:HTMLInputElement)=> void
}
const ProfileInfo: React.FC<Props> = (props) => {
  const [useZoom, setUseZoom] = useState(false)
  const [changeMode, setChangeMode] = useState(false)
  const [activeContacts, setActiveContacts] = useState(false)
  const imgZoomClass = cn(
    { [incClass.usedZoomImg]: useZoom === true },
    { [incClass.noUsedZoomImg]: useZoom === false }
  )
  const selectedPhoto = (e:any) => {
    props.updatePhoto(e.target.files[0])
  }
  const SelectChangeMode = () => {
    if (changeMode === false) {
      return (
        <div>
          <ProfileContacts changeMode={changeMode} setChangeMode={setChangeMode}
            activeContacts={activeContacts} setActiveContacts={setActiveContacts}
            {...props} />
          {ButtonChange(props, setChangeMode)}
        </div>
      )
    } else {
      return (
        <div>
          <ProfileContactsForm item={props.userProfile[0]} setChangeMode={setChangeMode}
            changeMode={changeMode} {...props}
            activeContacts={activeContacts} setActiveContacts={setActiveContacts} />
        </div>
      )
    }
  }
  if (props.userProfile.length === 0) return <div>Profile Loading...</div>
  return (
    <div>
      <div key={props.userProfile[0].userId}>
        <div className={incClass.Profile}>
          <div className={incClass.Profile__img}>
            <img className={imgZoomClass}
              onPointerLeave={() => setUseZoom(false)} onClick={() => setUseZoom(true)}
              src={NoPhoto(props.userProfile[0].photos.small)} alt='profilePhoto' />
            <ProfileStatusContainer {...props} item={props.userProfile[0]} />
            <MyProfile {...props} selectedPhoto={selectedPhoto} />
          </div>
          <div className={incClass.Profile__text}>
            <div className={incClass.ProfileInfo}>
              <SelectChangeMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo