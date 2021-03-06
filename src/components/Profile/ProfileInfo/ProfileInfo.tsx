import { ChangeEvent, useState } from 'react';
import incClass from '.././Profile.module.scss';
//@ts-ignore
import ProfileContacts from './ProfileContacts/ProfileContacts';
//@ts-ignore
import ProfileContactsForm, { ItemType } from './ProfileContacts/ProfileContactsForm';

import { ButtonChange, MyProfile, NoPhoto } from './ProfileInfoHelper';

import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
import cn from 'classnames'
import { dataType } from '../../../redux/auth-reducer';
import { ProfileType } from '../../../redux/GlobalTypes';

type Props = {
  userProfile: Array<ProfileType>
  statusText: string
  activeContactsProps: boolean
  userData: dataType
  ProfileItem: ProfileType
  changeText: boolean
  changeTextFunc: (ref: React.RefObject<HTMLInputElement>) => void
  addChangeText: () => void
  removeChangeText: () => void
  updatePhoto: (e: HTMLInputElement) => void
  getStatus: (id: number) => void
  updateStatus: (statusText: string | null) => void
  changeStatus: (ref: React.RefObject<HTMLInputElement>) => void
  updateAccountProfile: (values: any) => void
  item: ItemType
}

const ProfileInfo: React.FC<Props> = (props) => {
  const [useZoom, setUseZoom] = useState(false)
  const [changeMode, setChangeMode] = useState(false)
  const [activeContacts, setActiveContacts] = useState(false)
  const imgZoomClass = cn(
    { [incClass.usedZoomImg]: useZoom === true },
    { [incClass.noUsedZoomImg]: useZoom === false }
  )
  const selectedPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length){
       //@ts-ignore
      props.updatePhoto(e.target.files[0])
    }
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
          <ProfileContactsForm
            itemProfile={props.userProfile[0]} setChangeMode={setChangeMode}
            changeMode={changeMode}
            {...props}
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
            <ProfileStatusContainer removeChangeText={props.removeChangeText} addChangeText={props.addChangeText} changeTextFunc={props.changeTextFunc} changeText={props.changeText} userDataProps={props.userData} itemProps = {props.item} updateStatus={props.updateStatus} statusText={props.statusText} statusTextProps = {props.statusText} getStatus={props.getStatus} item={props.userProfile[0]} />
            <MyProfile {...props}
              selectedPhoto={selectedPhoto} />
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