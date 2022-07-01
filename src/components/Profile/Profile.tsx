//@ts-ignore
import { ProfileType } from '../../api/api-dal';
import AnonimGoLogin from '../../noc/hoc';
import { dataType } from '../../redux/auth-reducer';
import PostsContainer from './Posts/PostsContainer';
import incClass from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type Props = {
  userProfile: any
  statusText: string
  activeContactsProps: boolean
  ProfileItem: ProfileType
  userData: dataType
  changeText: boolean
  changeTextFunc: (ref:any)=> void
  addChangeText: ()=> void
  removeChangeText: ()=> void
  getStatus: (id:number)=> void
  updateStatus: (statusText:string|null)=> void
  changeStatus: (ref: any)=> void
  updatePhoto: ()=> void
}
let Profile:React.FC<Props> = props => {
  return (
    <main className={incClass.main}>
      <div className={incClass.container}>
        <ProfileInfo {...props} />
      </div>
      <PostsContainer />
    </main>
  )
}
const LoginProfileContainer = AnonimGoLogin(Profile);
export default LoginProfileContainer