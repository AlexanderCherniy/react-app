import incClass from '../../Profile.module.scss';
import { ShowAboutMe, ShowJobDescription, ShowJobMark } from './ProfileContactsHelper';
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";
let ProfileContacts = props => {
  const shortDataProfInfo = props.userProfile.map(item => {
    return (
      <div key={item.userId}>
        <div className={incClass.Profile__text}>
          <div className={incClass.ProfileInfo}>
          <div className={incClass.Id}> <span className={incClass.ProfileTextHeader}>ID:</span> {props.userProfile[0].userId} </div>
            <div className={incClass.Profile__name}><span className={incClass.ProfileTextHeader}>UserName:</span> {props.userProfile[0].fullName}</div>
            {/* <ProfileStatusContainer {...props} item={props.userProfile[0]} /> */}
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
            {Object.keys(item.contacts).map(key => {
              return <Contacts key={key}
                contactTitle={key}
                contactValue={item.contacts[key]} props = {props} />
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
const Contacts = ({ contactTitle, contactValue, props }) => {
  return (
    <div className={props.activeContacts === true ? incClass.ContactsFormContainer : incClass.ContactsFormContainer + ' ' + incClass.active}>
      <span className={incClass.ContactLinkHeader}>{contactTitle}: </span>
      <span>{contactValue}</span>
    </div>
  )
}
export default ProfileContacts