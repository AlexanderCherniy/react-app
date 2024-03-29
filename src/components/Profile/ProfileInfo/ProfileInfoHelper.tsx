import { Button } from 'antd';
import { ChangeEvent } from 'react';
import { NavLink } from 'react-router-dom';
import incClass from '.././Profile.module.scss';
const noPhoto =
  'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'

export  const NoPhoto = (smallPhoto: any) => {
    if (smallPhoto === null) {
      return noPhoto
    } else {
      return smallPhoto
    }
}
type MyProfileProps = {
  selectedPhoto: (e: ChangeEvent<HTMLInputElement>)=> void 
  count: number
}

export const MyProfile:React.FC<MyProfileProps> = (props: any) => {
  console.log(props.count);
  
  if (props.isMyProfile === true) {
    return <input style={props.count === 1 ? {display: 'none'} : {display: 'block'}}  className={incClass.selectedPhoto} type='file' onChange={props.selectedPhoto} />
  }
  return <></>
}
export const ButtonChange = (props: any, func:Function)=>{
  if(props.userData.id === props.userProfile[0].userId){
    return <Button onClick={() => func(true)} style={{backgroundColor: 'white', border: '1px black solid', color: 'black'}} type="primary" size={'large'}>
    Change Profile
  </Button>
  }
}