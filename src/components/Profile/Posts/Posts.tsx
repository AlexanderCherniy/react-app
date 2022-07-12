import React from "react";
import Post from './Post/Post';
import incClass from './Posts.module.scss';
import PostsForm from './PostsForm';
import { connect, useDispatch, useSelector } from "react-redux";
import { actions, PostType } from '../../../redux/profile-reducer'
import { AppState } from "../../../redux/store-redux";

const Posts:React.FC = (props) => {
  const post = useSelector((state:AppState)=>state.profilePage.post) 
  const userData = useSelector((state:AppState)=>state.auth)  
  const dispatch = useDispatch()
  const changeNewPost = (text: string) => dispatch(actions.changePostsCreateAction(text))
  const addPosts= (avatar: string) => dispatch(actions.addPostsCreateAction(avatar))
  const deletePosts= async () => {
      await dispatch(actions.deletePosts())
      dispatch(actions.checkPosts())
  }

  localStorage.setItem("posts",JSON.stringify(post))

  return (
    <div className={incClass.posts}>
      <div className={incClass.container}>
        <h2 className={incClass.title}>Posts <img className={incClass.cross} onClick={()=> deletePosts()} src="https://icon-library.com/images/cross-png-icon/cross-png-icon-3.jpg" alt="cross"/></h2>
        <PostsForm userData={userData} changeNewPost={changeNewPost} addPosts={addPosts}/>
      </div>
      <div className={incClass.flexReverse}>
        {post === null ? <div>No Comments</div> : post.map((post: PostType) => <Post key={post.id} img={post.img} comment={post.comment} />)}
      </div>
    </div>
  )
}
export default Posts