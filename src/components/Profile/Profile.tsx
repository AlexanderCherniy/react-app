
import { Breadcrumb, Col } from 'antd';
import { useSelector } from 'react-redux';
//@ts-ignore
import { ProfileType } from '../../api/api-dal';
import AnonimGoLogin from '../../noc/hoc';
import { dataType } from '../../redux/auth-reducer';
import { getMyUserProfile } from '../../redux/profile-reselects';
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
    <main className={incClass.main}>
      <Breadcrumb style={{ margin: '16px 0', }}>
        <Breadcrumb.Item>Start</Breadcrumb.Item>
        <Breadcrumb.Item>ProfilePage</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
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