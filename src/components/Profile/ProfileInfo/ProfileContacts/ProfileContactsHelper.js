import incClass from '../../Profile.module.css';

export const ShowJobMark = (item)=>{
    if(item.lookingForAJob === true){
      return <img className={incClass.jobSearchIcon} 
      src='https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png' alt='Check Mark' />
    } else {
      return <img className={incClass.jobSearchIcon} src='https://img.cppng.com/download/2020-06/5-2-red-cross-mark-download-png.png' alt='Cross' />
    }
}
export const ShowJobDescription = (item)=>{
    if(item.lookingForAJobDescription === null){
      return "No Information"
    } else return item.lookingForAJobDescription
  }
export const ShowAboutMe = (item)=>{
    if(item.aboutMe === null){
      return "No Information"
    } else return item.aboutMe
}
