
import { Breadcrumb, Col } from 'antd';
//@ts-ignore
import { ProfileType } from '../../api/api-dal';
import AnonimGoLogin from '../../noc/hoc';
import { dataType } from '../../redux/auth-reducer';
import Posts from './Posts/Posts';
import incClass from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type Props = {
  userProfile: any
  statusText: string
  activeContactsProps: boolean
  ProfileItem: ProfileType
  userData: dataType
  changeText: boolean
  changeTextFunc: (ref: any) => void
  addChangeText: () => void
  removeChangeText: () => void
  getStatus: (id: number) => void
  updateStatus: (statusText: string | null) => void
  changeStatus: (ref: any) => void
  updatePhoto: () => void
}
let Profile: React.FC<Props> = props => {
  return (
    <Col span={20}> 
    <main className={incClass.main}>
      <Breadcrumb style={{ margin: '16px 0', }}>
        <Breadcrumb.Item>Start</Breadcrumb.Item>
        <Breadcrumb.Item>ProfilePage</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <div className={incClass.container}>
        <ProfileInfo {...props} />
      </div>
      <Posts />
    </main>
    </Col>
  )
}
const LoginProfileContainer = AnonimGoLogin(Profile);
export default LoginProfileContainer