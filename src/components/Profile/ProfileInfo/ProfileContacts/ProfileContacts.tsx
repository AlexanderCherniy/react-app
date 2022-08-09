import incClass from '../../Profile.module.scss';
import { ShowAboutMe, ShowJobDescription, ShowJobMark } from './ProfileContactsHelper';
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";
import { ProfileContactsType, ProfileType } from '../../../../redux/GlobalTypes';
import { ItemType } from './ProfileContactsForm';
import { dataType } from '../../../../redux/chat-reducer';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/store-redux';


type Props = {
  userProfile: Array<ProfileType>
  changeMode: boolean
  setChangeMode: (boolean: boolean)=> void
  activeContacts: boolean
  setActiveContacts: (activeContacts: boolean)=> void
  userData: dataType
  activeContactsProps: boolean
  item: ItemType
  ProfileItem: ProfileType
  changeText: boolean
  changeTextFunc: (ref:any)=> void
  addChangeText: ()=> void
  removeChangeText: ()=> void
  updatePhoto: (e:HTMLInputElement)=> void
  getStatus: (id:number)=> void
  updateStatus: (statusText:string|null)=> void
  changeStatus: (ref: any)=> void
  statusText: string
  updateAccountProfile: (values: any) => void
}
const ProfileContacts:React.FC<Props> = props => {
  const statusText = useSelector((state:AppState)=> state.profilePage.statusText)
  const shortDataProfInfo = props.userProfile.map((item: ProfileType) => {
    return (
      <div key={item.userId}>
        <div className={incClass.Profile__text}>
          <div className={incClass.ProfileInfo}>
          <div className={incClass.Id}> <span className={incClass.ProfileTextHeader}>ID:</span> {props.userProfile[0].userId} </div>
            <div className={incClass.Profile__name}><span className={incClass.ProfileTextHeader}>UserName:</span> {props.userProfile[0].fullName}</div>
            {/* <ProfileStatusContainer removeChangeText={props.removeChangeText} addChangeText={props.addChangeText} changeTextFunc={props.changeTextFunc} changeText={props.changeText} userDataProps={props.userData} itemProps = {item} updateStatus={props.updateStatus} statusText={statusText} statusTextProps = {statusText} getStatus={props.getStatus} item={props.userProfile[0]} /> */}
            <div className={incClass.ProfileTextStyle}>
              <span className={incClass.ProfileTextHeader}>
                AboutMe:
              </span> {ShowAboutMe(item)}
            </div>
            <div className={incClass.ProfileJobSearch}>
              <span className={incClass.ProfileJobSearchTitle}>
                Job Search:
              </span>{ShowJobDescription(item)} {ShowJobMark(item)}
            </div>
            <div onClick={()=> props.setActiveContacts(!props.activeContacts)} 
              className={incClass.ContactTitle}>
              <span>Contacts <span>{props.activeContacts === false ? '+' : '-'}</span></span>
            </div> 
            {Object.keys(item.contacts).map((key ) => {
              
              return <Contacts key={key as keyof ProfileContactsType}
                contactTitle={key}
                contactValue={item.contacts[key as keyof ProfileContactsType]} activeContacts = {props.activeContacts} />
            })}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      {shortDataProfInfo}
    </div>
  )
}
type ContactsPropsType = {
  contactTitle: string
  contactValue: string
  activeContacts: boolean
}
type ContactsType = (args: ContactsPropsType)=> any
const Contacts:ContactsType = ({ contactTitle, contactValue, activeContacts }) => {
  return (
    <div className={activeContacts === true ? incClass.ContactsFormContainer : incClass.ContactsFormContainer + ' ' + incClass.active}>
      <span className={incClass.ContactLinkHeader}>{contactTitle}: </span>
      <span>{contactValue}</span>
    </div>
  )
}
export default ProfileContacts