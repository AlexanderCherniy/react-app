import { useState } from 'react';
import incClass from '.././Profile.module.css';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
let noPhoto = 
    'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
let ProfileInfo = props=>{
  const [useZoom,setUseZoom] = useState(false)
  let shortDataProfInfo = props.userProfile.map(item=>{
    return(
    <div key={item.userId}>
        <div className={incClass.Profile}>
          <div className={incClass.Profile__img}> 
            <img 
              className={useZoom === true ? incClass.usedZoomImg : incClass.noUsedZoomImg}
              onPointerLeave={()=> setUseZoom(false)} onClick={()=> setUseZoom(true)} 
              src={item.photos.small === null ? noPhoto : item.photos.small} 
              alt='profilePhoto'
            />
          </div>
          <div className= {incClass.Profile__text}>
          <div className={incClass.Id}> {item.userId} </div>
            <div className={incClass.Profile__name}>{item.fullName}</div>
            <ProfileStatusContainer {...props} item = {item}/>
              <div className= {incClass.ProfileInfo}>
                <div className={incClass.ProfileTextStyle}>Поиск работы: {item.lookingForAJobDescription}</div>
                <div className={incClass.ProfileTextStyle}>twitter: {item.contacts.twitter}</div>
                <div className={`${incClass.ProfileInfo_learn} ${incClass.ProfileMega}`}>LEARN MORE</div>
              </div>
          </div>
        </div>
      </div>
    )
  })
    return(
      <div>
      {shortDataProfInfo}
      </div>
    )
}
export default ProfileInfo