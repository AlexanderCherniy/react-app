import React from "react";
import Post from './Post/Post';
import incClass from './Posts.module.css';
import PostsForm from './PostsForm';
type Props = {
  post: any
  userData: any
  changeNewPost: ()=> void
  deletePosts: ()=> void
  addPosts: ()=> void
}
const Posts:React.FC<Props> = (props) => {
  localStorage.setItem("posts",JSON.stringify(props.post))
  return (
    <div className={incClass.posts}>
      <div className={incClass.container}>
        <h2 className={incClass.title}>Posts <img className={incClass.cross} onClick={()=> props.deletePosts()} src="https://icon-library.com/images/cross-png-icon/cross-png-icon-3.jpg" alt="cross"/></h2>
        <PostsForm userData={props.userData} changeNewPost={props.changeNewPost} addPosts={props.addPosts}/>
      </div>
      <div className={incClass.flexReverse}>
        {props.post === null ? <div>No Comments</div> : props.post.map((post:any) => <Post key={post.id} img={post.img} comment={post.comment} />)}
      </div>
    </div>
  )
}
export default Posts