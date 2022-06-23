//@ts-ignore
import AnonimGoLogin from '../../noc/noc';
import PostsContainer from './Posts/PostsContainer';
import incClass from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type Props = {
  userProfile: any
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