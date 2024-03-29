import { Col } from 'antd';
import { useSelector } from 'react-redux';
//@ts-ignore
import { ProfileType } from '../../api/api-dal';
import AnonimGoLogin from '../../noc/hoc';
import { dataType } from '../../redux/auth-reducer';
import { getMyUserProfile } from '../../redux/profile-reselects';
import BreadCrumbContainer from '../BreadCrumb/BreadCrumb';
import Posts from './Posts/Posts';
import incClass from './Profile.module.scss';
import { ItemType } from './ProfileInfo/ProfileContacts/ProfileContactsForm';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type Props = {
  statusText: string
  activeContactsProps: boolean
  ProfileItem: ProfileType
  userData: dataType
  changeText: boolean
  updateAccountProfile: (values: any) => void
  changeTextFunc: (ref: any) => void
  addChangeText: () => void
  removeChangeText: () => void
  getStatus: (id: number) => void
  updateStatus: (statusText: string | null) => void
  changeStatus: (ref: any) => void
  updatePhoto: () => void
  changeMode: boolean
  setChangeMode: (boolean: boolean)=> void
  activeContacts: boolean
  setActiveContacts: (activeContacts: boolean)=> void
  item: ItemType
}
let Profile: React.FC<Props> = props => {
  const userProfile = useSelector(getMyUserProfile)
  return (
    <Col span={20}> 
    <main style={{marginLeft: 10}} className={incClass.main}>
      <BreadCrumbContainer page='Profile' containerPage='ProfilePage'/>
      {window.innerWidth <= 512 ? <div style={{background: 'white', padding: '8px 20px', borderRadius: 3 ,marginBottom: 10, display: 'flex', justifyContent: 'center'}}><b>{userProfile[0]?.fullName}</b></div> : <span style={{marginLeft: 10, borderRadius: 3 ,background: 'white', padding: '8px 30px'}}><b>{userProfile[0]?.fullName}</b></span>}

      <div className={incClass.container}>
        <ProfileInfo {...props} userProfile = {userProfile}/>
      </div>
      <Posts />
    </main>
    </Col>
  )
}
const LoginProfileContainer = AnonimGoLogin(Profile);
export default LoginProfileContainer