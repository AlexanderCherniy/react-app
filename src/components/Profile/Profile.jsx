import Posts from './Posts/Posts';
import PostsContainer from './Posts/PostsContainer';
import incClass from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
let Profile = (props)=>{
    return(
      <main className={incClass.main}>
      <div className={incClass.container}>
        <div className='title'>Profile</div>
        <ProfileInfo state = {props.store.getState().profilePage}/>
      </div>
      <PostsContainer store = {props.store}/>
    </main>
    )
}

export default Profile