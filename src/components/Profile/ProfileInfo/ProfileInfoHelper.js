import incClass from '.././Profile.module.css';
const noPhoto =
  'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'

export  const NoPhoto = (smallPhoto) => {
    if (smallPhoto === null) {
      return noPhoto
    } else {
      return smallPhoto
    }
}
export const MyProfile = (props) => {
  if (props.isMyProfile === true) {
    return <input className={incClass.selectedPhoto} type='file' onChange={props.selectedPhoto} />
  }
}
export const ButtonChange = (props, func)=>{
  if(props.userData.id === props.userProfile[0].userId){
    return <button className={incClass.changeButton} onClick={() => func(true)}>CHANGE</button>
  }
}