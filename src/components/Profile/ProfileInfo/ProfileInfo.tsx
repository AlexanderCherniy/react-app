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
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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
  console.log(props.userProfile);
  
  const [useZoom, setUseZoom] = useState(false)
  const [changeMode, setChangeMode] = useState(false)
  const [activeContacts, setActiveContacts] = useState(false)
  const dispatch = useDispatch()
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
  const [count, setCount] = useState(1)
  const funcPlus = ()=>{
    if(count === 1){
      return setCount(2)
    }
  }
  const funcMinus = ()=>{
    if(count === 2){
      return setCount(1)
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
  console.log(props.userData.id === props.userProfile[0].userId);
  
  return (
    <div>
      <div key={props.userProfile[0].userId}>
        <div className={window.innerWidth <= 630 ? incClass.Profile : incClass.ProfileFlex}>
          <div className={incClass.ProfileImgContainer}>
            <div className={incClass.Profile__img}>
              <img className={imgZoomClass}
                // onMouseOutCapture={funcMinus}
                onMouseMove={funcPlus}
                onPointerLeave={() => setUseZoom(false)} onClick={() => setUseZoom(true)}
                src={NoPhoto(props.userProfile[0].photos.small)} alt='profilePhoto' />
              <ProfileStatusContainer removeChangeText={props.removeChangeText} addChangeText={props.addChangeText} changeTextFunc={props.changeTextFunc} changeText={props.changeText} userDataProps={props.userData} itemProps = {props.item} updateStatus={props.updateStatus} statusText={props.statusText} statusTextProps = {props.statusText} getStatus={props.getStatus} item={props.userProfile[0]} />
              <MyProfile count={count} {...props}
                selectedPhoto={selectedPhoto} />
            </div>
          </div>
          <div className={incClass.ProfileTextContainer}>
          <div className={incClass.Profile__text}>
            <div className={incClass.ProfileInfo}>
              <SelectChangeMode />
              
              {props.userData.id !== props.userProfile[0].userId 
              ? <Button style={{backgroundColor: 'white', border: '1px black solid', color: 'black'}} type="primary" size={'large'}>
                  <NavLink className={incClass.WriteToUser} to={`/massages/${props.userProfile[0].userId}`}>Write to User</NavLink>
                </Button>
              : <></>} 
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo