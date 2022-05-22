import AnonimGoLogin from '../../noc/noc';
import PostsContainer from './Posts/PostsContainer';
import incClass from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
let Profile = props=>{
    return(
      <main className={incClass.main}>
      <div className={incClass.container}>
        <ProfileInfo {...props} state = {props.store.getState().profilePage}/>
      </div>
        <PostsContainer />
    </main>
    )
}
const LoginProfileContainer = AnonimGoLogin(Profile,true);
export default LoginProfileContainer